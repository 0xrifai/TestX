"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAccountFromSigner = exports.WalletProvider = exports.useWallet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const wallet_management_1 = require("@lifi/wallet-management");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const types_1 = require("../../types");
const WidgetProvider_1 = require("../WidgetProvider");
const liFiWalletManagement = new wallet_management_1.LiFiWalletManagement();
const stub = () => {
    throw new Error(`You forgot to wrap your component in <${exports.WalletProvider.name}>.`);
};
const initialContext = {
    connect: stub,
    disconnect: stub,
    switchChain: stub,
    addChain: stub,
    addToken: stub,
    account: {},
};
const WalletContext = (0, react_1.createContext)(initialContext);
const useWallet = () => (0, react_1.useContext)(WalletContext);
exports.useWallet = useWallet;
const WalletProvider = ({ children }) => {
    const emitter = (0, hooks_1.useWidgetEvents)();
    const { walletManagement } = (0, WidgetProvider_1.useWidgetConfig)();
    const [account, setAccount] = (0, react_1.useState)({});
    const [currentWallet, setCurrentWallet] = (0, react_1.useState)();
    const handleWalletUpdate = async (wallet) => {
        setCurrentWallet(wallet);
        const account = await (0, exports.extractAccountFromSigner)(wallet?.account?.signer);
        setAccount(account);
        return account;
    };
    const connect = (0, react_1.useCallback)(async (wallet) => {
        if (walletManagement) {
            const signer = await walletManagement.connect();
            const account = await (0, exports.extractAccountFromSigner)(signer);
            setAccount(account);
            emitter.emit(types_1.WidgetEvent.WalletConnected, {
                address: account.address,
                chainId: account.chainId,
            });
            return;
        }
        await liFiWalletManagement.connect(wallet);
        wallet.on('walletAccountChanged', handleWalletUpdate);
        const account = await handleWalletUpdate(wallet);
        emitter.emit(types_1.WidgetEvent.WalletConnected, {
            address: account.address,
            chainId: account.chainId,
        });
    }, [emitter, walletManagement]);
    const disconnect = (0, react_1.useCallback)(async () => {
        if (walletManagement) {
            await walletManagement.disconnect();
            setAccount({});
            return;
        }
        if (currentWallet) {
            await liFiWalletManagement.disconnect(currentWallet);
            currentWallet.removeAllListeners();
            await handleWalletUpdate(undefined);
        }
    }, [currentWallet, walletManagement]);
    const switchChain = (0, react_1.useCallback)(async (chainId) => {
        try {
            if (walletManagement?.switchChain) {
                const signer = await walletManagement.switchChain(chainId);
                const account = await (0, exports.extractAccountFromSigner)(signer);
                setAccount(account);
                return signer;
            }
            else if (!currentWallet) {
                const provider = account.signer?.provider;
                if (!provider) {
                    throw new Error(`Switch chain: No provider available`);
                }
                await (0, wallet_management_1.switchChain)(provider, chainId);
            }
            else {
                await currentWallet?.switchChain(chainId);
                await handleWalletUpdate(currentWallet);
            }
            // TODO: this will fail if it's not created with ethers 'any' network, replace with the new signer when possible
            return account.signer;
        }
        catch {
            return account.signer;
        }
    }, [account.signer, currentWallet, walletManagement]);
    const addChain = (0, react_1.useCallback)(async (chainId) => {
        try {
            if (walletManagement?.addChain) {
                return walletManagement.addChain(chainId);
            }
            else if (!currentWallet) {
                const provider = account.signer?.provider;
                if (!provider) {
                    throw new Error(`Add chain: No provider available`);
                }
                await (0, wallet_management_1.addChain)(provider, chainId);
            }
            else {
                await currentWallet?.addChain(chainId);
                await handleWalletUpdate(currentWallet);
            }
            return true;
        }
        catch {
            return false;
        }
    }, [account.signer?.provider, currentWallet, walletManagement]);
    const addToken = (0, react_1.useCallback)(async (chainId, token) => {
        try {
            if (walletManagement?.addToken) {
                return walletManagement.addToken(token, chainId);
            }
            else if (!currentWallet) {
                const provider = account.signer?.provider;
                if (!provider) {
                    throw new Error(`Add token: No provider available`);
                }
                await (0, wallet_management_1.switchChainAndAddToken)(provider, chainId, token);
            }
            else {
                await currentWallet?.addToken(chainId, token);
                await handleWalletUpdate(currentWallet);
            }
        }
        catch { }
    }, [account.signer?.provider, currentWallet, walletManagement]);
    (0, react_1.useEffect)(() => {
        const autoConnect = async () => {
            const persistedActiveWallets = (0, wallet_management_1.readActiveWallets)();
            const activeWallets = wallet_management_1.supportedWallets.filter((wallet) => persistedActiveWallets.some((perstistedWallet) => perstistedWallet.name === wallet.name));
            if (!activeWallets.length) {
                return;
            }
            await liFiWalletManagement.autoConnect(activeWallets);
            activeWallets[0].on('walletAccountChanged', handleWalletUpdate);
            await handleWalletUpdate(activeWallets[0]);
        };
        autoConnect();
    }, []);
    // keep widget in sync with changing external signer object
    (0, react_1.useEffect)(() => {
        if (walletManagement) {
            let ignore = false;
            const updateAccount = async () => {
                const account = await (0, exports.extractAccountFromSigner)(walletManagement?.signer);
                // we should ignore the update if there is a newer one
                if (!ignore) {
                    setAccount(account);
                }
            };
            updateAccount();
            return () => {
                ignore = true;
            };
        }
    }, [walletManagement]);
    const value = (0, react_1.useMemo)(() => ({
        connect,
        disconnect,
        switchChain,
        addChain,
        addToken,
        account,
    }), [account, addChain, addToken, connect, disconnect, switchChain]);
    return ((0, jsx_runtime_1.jsx)(WalletContext.Provider, { value: value, children: children }));
};
exports.WalletProvider = WalletProvider;
const extractAccountFromSigner = async (signer) => {
    try {
        return {
            address: await signer?.getAddress(),
            isActive: (signer && !!(await signer.getAddress()) === null) || !!signer,
            signer,
            chainId: await signer?.getChainId(),
        };
    }
    catch (error) {
        console.error(error);
        return {};
    }
};
exports.extractAccountFromSigner = extractAccountFromSigner;

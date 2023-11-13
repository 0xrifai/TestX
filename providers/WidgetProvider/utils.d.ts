export declare const isItemAllowed: <T>(itemId: T, items?: {
    allow?: T[] | undefined;
    deny?: T[] | undefined;
} | undefined) => boolean;

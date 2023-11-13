/// <reference types="react" />
import type { CardProps } from '../Card';
import type { RouteCardProps } from './types';
export declare const RouteCard: React.FC<RouteCardProps & Omit<CardProps, 'variant'>>;

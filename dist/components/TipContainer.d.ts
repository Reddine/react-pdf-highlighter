import { ReactNode } from 'react';
import { LTWHP } from '../types';
interface Props {
    children: ReactNode;
    style: {
        top: number;
        left: number;
        bottom: number;
    };
    scrollTop: number;
    pageBoundingRect: LTWHP;
}
export declare function TipContainer({ children, style, scrollTop, pageBoundingRect, }: Props): import("react/jsx-runtime").JSX.Element;
export {};

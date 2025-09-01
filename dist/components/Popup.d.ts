import { ReactNode, ReactElement } from 'react';
interface Props {
    onMouseOver: (content: ReactNode) => void;
    popupContent: ReactElement;
    onMouseOut: () => void;
    children: ReactNode;
}
export declare function Popup({ onMouseOver, popupContent, onMouseOut, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};

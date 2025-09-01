import { ReactNode } from 'react';
import { PDFViewer } from 'pdfjs-dist/web/pdf_viewer.mjs';
import { IHighlight, LTWH, LTWHP, Position, Scaled, ScaledPosition } from '../types';
import { T_ViewportHighlight } from './PdfHighlighter';
interface HighlightLayerProps<T_HT> {
    highlightsByPage: {
        [pageNumber: string]: Array<T_HT>;
    };
    pageNumber: string;
    scrolledToHighlightId: string;
    highlightTransform: (highlight: T_ViewportHighlight<T_HT>, index: number, setTip: (highlight: T_ViewportHighlight<T_HT>, callback: (highlight: T_ViewportHighlight<T_HT>) => ReactNode) => void, hideTip: () => void, viewportToScaled: (rect: LTWHP) => Scaled, screenshot: (position: LTWH) => string, isScrolledTo: boolean) => ReactNode;
    tip: {
        highlight: T_ViewportHighlight<T_HT>;
        callback: (highlight: T_ViewportHighlight<T_HT>) => ReactNode;
    } | null;
    scaledPositionToViewport: (scaledPosition: ScaledPosition) => Position;
    hideTipAndSelection: () => void;
    viewer: PDFViewer;
    screenshot: (position: LTWH, pageNumber: number) => string;
    showTip: (highlight: T_ViewportHighlight<T_HT>, content: ReactNode) => void;
    setTip: (state: {
        highlight: T_ViewportHighlight<T_HT>;
        callback: (highlight: T_ViewportHighlight<T_HT>) => ReactNode;
    }) => void;
}
export declare function HighlightLayer<T_HT extends IHighlight>({ highlightsByPage, scaledPositionToViewport, pageNumber, scrolledToHighlightId, highlightTransform, tip, hideTipAndSelection, viewer, screenshot, showTip, setTip, }: HighlightLayerProps<T_HT>): import("react/jsx-runtime").JSX.Element;
export {};

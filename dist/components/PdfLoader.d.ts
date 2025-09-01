import { PDFDocumentProxy } from 'pdfjs-dist';
import { default as React, Component, ReactNode, ReactElement } from 'react';
interface Props {
    /** See `GlobalWorkerOptionsType`. */
    workerSrc: string;
    url: string;
    beforeLoad: ReactNode;
    errorMessage?: ReactElement;
    children: (pdfDocument: PDFDocumentProxy) => ReactNode;
    onError?: (error: Error) => void;
    cMapUrl?: string;
    cMapPacked?: boolean;
}
interface State {
    pdfDocument: PDFDocumentProxy | null;
    error: Error | null;
}
export declare class PdfLoader extends Component<Props, State> {
    state: State;
    static defaultProps: {
        workerSrc: string;
    };
    documentRef: React.RefObject<HTMLElement | null>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate({ url }: Props): void;
    componentDidCatch(error: Error): void;
    load(): void;
    render(): import("react/jsx-runtime").JSX.Element;
    renderError(): React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null;
}
export {};

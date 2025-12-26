import { ReactElement } from "react";

export type LoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    width: number;
    showTooltip?: boolean;
    name?: string;
    designation?: string;
}

export interface AvatarCollapsedProps extends React.HTMLAttributes<HTMLDivElement> {
    children: Array<ReactElement<AvatarImageProps>> | ReactElement<AvatarImageProps>;
}

export interface AvatarImageProps extends React.HTMLAttributes<HTMLImageElement> {
    onStatusChange?: (status: LoadingStatus) => void;
    alt?: string;
    src: string;
    grayScale?: boolean;
}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {

}

export interface AvatarContextType {
    status: LoadingStatus;
    onLoadingStatusChange: (status: LoadingStatus) => void;
}

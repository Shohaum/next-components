import { ReactElement } from "react";

export interface DockItemProps extends React.HTMLAttributes<HTMLLIElement> {
    slug?: string;
    children: React.ReactNode;
};

export interface DockListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: Array<ReactElement<DockItemProps>> | ReactElement<DockItemProps> | ReactElement<MagnetProps>;
};

export interface DockerLinkProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactElement<DockListProps>;
};

export interface MagnetProps extends React.HTMLAttributes<HTMLSpanElement> {
};

export type MagnetStyles = {
    width?: string;
    height?: string;
    opacity?: number | string;
    transform?: string;
};

export interface DockingStationContextType {
    magnetStyles: MagnetStyles;
    setMagnetStyles: React.Dispatch<React.SetStateAction<MagnetStyles>>;
};

import { ReactElement } from "react";

export type DockItemProps = {
    slug?: string;
    children: React.ReactNode;
};

export type DockListProps = {
    children: Array<ReactElement<DockItemProps>> | ReactElement<DockItemProps> | ReactElement<MagnetProps>;
};

export type LinkDockerProps = {
    children: ReactElement<DockListProps>;
};

export type MagnetProps = Record<string, never>;
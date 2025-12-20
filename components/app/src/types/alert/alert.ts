import { ReactElement } from "react";

export type AlertProps = {
    children: Array<ReactElement<AlertItemProps>> | ReactElement<AlertItemProps>;
};

export type AlertDescriptionProps = {
    children: React.ReactNode;
};

export type AlertItemProps = {
    type: "success" | "warn" | "failure" | "normal",
    children: React.ReactNode;
};

export type AlertTitleProps = {
    children: React.ReactNode;
};
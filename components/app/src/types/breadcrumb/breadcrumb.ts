import React from "react";

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
    children: React.ReactNode;
}

export interface BreadcrumbListProps extends React.HTMLAttributes<HTMLOListElement> {
    children: React.ReactNode;
}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> { }

export interface BreadcrumbLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    asChild?: boolean;
    children: React.ReactNode;
}

export interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLLIElement> { }

export interface BreadcrumbEllipsisProps extends React.HTMLAttributes<HTMLSpanElement> { }

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
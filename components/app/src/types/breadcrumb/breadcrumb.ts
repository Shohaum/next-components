import React from "react";

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
    children: React.ReactNode;
}

export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
    children: React.ReactNode;
}

export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> { }

export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    asChild?: boolean;
    children: React.ReactNode;
}

export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {
    children: React.ReactNode;
}

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> { }

export interface BreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<"span"> { }

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
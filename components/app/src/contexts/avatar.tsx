"use client";

import React, { createContext, useContext, useState } from "react";
// types
import { AvatarContextType, LoadingStatus } from "@/types/avatar/avatar";

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
    const [status, setStatus] = useState<LoadingStatus>('idle');

    const onLoadingStatusChange = (status: LoadingStatus) => {
        setStatus(status);
    };

    return (
        <AvatarContext.Provider value={{ status, onLoadingStatusChange }}>
            {children}
        </AvatarContext.Provider>
    );
};

export const useAvatar = () => {
    const context = useContext(AvatarContext);
    if (!context) {
        throw new Error("useAvatar must be used within an AvatarProvider");
    }
    return context;
};

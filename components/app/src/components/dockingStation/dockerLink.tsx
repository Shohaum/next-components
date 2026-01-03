// CSS
import styles from "./dockerLink.module.css";
// utilities
import React from "react";
// contexts
import { DockingStationProvider } from "@/contexts/dockingStation";
// types
import { DockerLinkProps } from "@/types/dockingStation/dockingStation";

const DockerLink = React.forwardRef<HTMLDivElement, DockerLinkProps>(({ children, ...props }, ref) => {

    return (
        <div {...props} ref={ref} className={`${styles.linkDocker} ${props.className || ""}`}>
            <DockingStationProvider>
                {children}
            </DockingStationProvider>
        </div >
    );
});

DockerLink.displayName = "DockerLink";

export default DockerLink;  
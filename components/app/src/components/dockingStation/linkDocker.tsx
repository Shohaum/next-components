// CSS
import styles from "./linkDocker.module.css";
// contexts
import { DockingStationProvider } from "@/contexts/docking-station";
// types
import { LinkDockerProps } from "@/types/docking-station/dockingStation";

const LinkDocker = ({ children }: LinkDockerProps
) => {

    return (
        <div className={styles.linkDocker}>
            <DockingStationProvider>
                {children}
            </DockingStationProvider>
        </div >
    );
};

export default LinkDocker;
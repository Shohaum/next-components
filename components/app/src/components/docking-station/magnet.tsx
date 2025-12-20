// CSS
import styles from "./magnet.module.css";
// custom hooks
import { useDockingStation } from "@/contexts/docking-station";
// types
import { MagnetProps } from "@/types/docking-station/dockingStation";

const Magnet: React.FC<MagnetProps> = () => {

    const { magnetStyles } = useDockingStation();

    return (
        <span style={magnetStyles} className={styles.magnet} />
    );
};

export default Magnet;
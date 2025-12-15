// CSS
import styles from "./magnet.module.css";
// custom hooks
import { useDockingStation } from "@/contexts/docking-station";

const Magnet = () => {

    const { magnetStyles } = useDockingStation();

    return (
        <span style={magnetStyles} className={styles.magnet} />
    );
};

export default Magnet;
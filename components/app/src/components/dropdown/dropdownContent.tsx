// CSS
import styles from "@/components/dropdown/dropdownContent.module.css";

type DropdownContentProps = {
    children: React.ReactNode;
}

const DropdownContnet = ({ children }: DropdownContentProps) => {
    return (
        <div data-value="dropdown" id="dropdown" popover="auto" className={`${styles.dropdownContent}`}>
            {children}
        </div>
    )
};

export default DropdownContnet;
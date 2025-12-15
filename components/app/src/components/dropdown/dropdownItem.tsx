"use client"
// CSS
import styles from "@/components/dropdown/dropdownItem.module.css";

type DropdownItemProps = {
    id?: string,
    title?: string,
    disabled?: boolean,
    autofocus?: boolean,
    name?: string,
    type?: "button" | "reset" | "submit",
    role?: string,
    dataValue?: string,
    onClick?: () => void,
    children?: React.ReactNode;
}

const DropdownItem = ({
    id = "",
    title = "",
    disabled = false,
    autofocus = false,
    name = "button",
    type = "button",
    role = "button",
    dataValue = "",
    onClick = () => { },

    children
}:
    DropdownItemProps) => {


    return (
        <button
            className={styles.dropdownItem}
            id={id}
            title={title} disabled={disabled}
            onClick={onClick}
            name={name}
            type={type}
            role={role}
            tabIndex={0}
            autoFocus={autofocus}
            data-value={dataValue}
        >
            {children}
        </button>
    )
};

export default DropdownItem;
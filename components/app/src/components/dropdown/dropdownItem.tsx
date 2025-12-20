"use client"
// CSS
import styles from "@/components/dropdown/dropdownItem.module.css";
// types
import { DropdownItemProps } from "@/types/dropdown/dropdown";

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
            data-slot="dropdown-item"
        >
            {children}
        </button>
    )
};

export default DropdownItem;
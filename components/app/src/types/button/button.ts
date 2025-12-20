export type ButtonProps = {
    id?: string,
    title?: string,
    disabled?: boolean,
    autofocus?: boolean,
    name?: string,
    type?: "button" | "reset" | "submit",
    role?: string,
    dataValue?: string,
    onClick?: () => void,
    children: React.ReactNode

    // styles
    color?: string,
    background?: string,
    borderColor?: string
}
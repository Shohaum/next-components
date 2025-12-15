type DropdownGroupProps = {
    children: React.ReactNode;
}

const DropdownGroup = ({ children }: DropdownGroupProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default DropdownGroup;
// contexts
import { DropdownSubProvider } from "@/contexts/dropdown";
// types
import { DropdownSubProps } from "@/types/dropdown/dropdown";

const DropdownSub = ({ children }: DropdownSubProps) => {

    return (
        <DropdownSubProvider>
            {children}
        </DropdownSubProvider>
    )
};

DropdownSub.displayName = "DropdownSub";

export default DropdownSub;
// CSS
import styles from "@/components/avatar/avatarCollapsed.module.css";
// types
import { AvatarCollapsedProps } from "@/types/avatar/avatar";

const AvatarCollapsed = ({ children }: AvatarCollapsedProps) => {
    return (
        <div className={styles.avatarCollapsed}>
            {children}
        </div>
    )
}

export default AvatarCollapsed;
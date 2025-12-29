// CSS
import styles from "@/components/avatar/avatarFallback.module.css";
// contexts
import { useAvatar } from "@/contexts/avatar";
// types
import { AvatarFallbackProps } from "@/types/avatar/avatar";

const AvatarFallback = ({ children, className, ...props }: AvatarFallbackProps) => {
    const { status } = useAvatar();

    if (status === 'loaded') {
        return null;
    }

    return (
        <span className={styles.avatarFallback} {...props}>
            {children}
        </span>
    )
};

export default AvatarFallback;

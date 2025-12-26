// CSS
import styles from "./avatar.module.css";
// contexts
import { AvatarProvider } from "@/contexts/avatar";
// types
import { AvatarProps } from "@/types/avatar/avatar";

const Avatar = ({
    children,
    width = 0,
    name,
    designation,
    showTooltip = false,
    style,
    ...props }: AvatarProps) => {

    return (
        <AvatarProvider>
            <span style={{ width: width, ...style }} className={styles.avatar} {...props}>
                {children}

                {showTooltip && (
                    <span className={styles.avatarTooltip}>
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </span>
                )}
            </span>
        </AvatarProvider>
    )
};

export default Avatar;

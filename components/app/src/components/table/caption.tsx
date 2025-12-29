// CSS
import styles from "@/components/table/caption.module.css";
// types
import { CaptionProps } from "@/types/table/table";
const Caption = ({ children }: CaptionProps) => {
    return (
        <caption aria-label="tableCaption" data-slot="tableCaption" className={styles.caption}>
            {children}
        </caption>
    );
}

export default Caption;
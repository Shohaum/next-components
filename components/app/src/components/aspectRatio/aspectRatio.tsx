// CSS
import styles from "@/components/aspectRatio/aspectRatio.module.css";
// types
type AspectRatioProps = {
    rounded?: "small" | "medium" | "large" | "none",
    width?: number,
    ratio?: number
    children: React.ReactNode;
}

const AspectRatio = ({ rounded = "none", width = 100, ratio = 1, children }: AspectRatioProps) => {

    const radiusMap = {
        large: "var(--border-radius-lg)",
        medium: "var(--border-radius-md)",
        small: "var(--border-radius-sm)",
        none: "var(--border-radius-none)",
    };

    return (
        <div data-slot="aspect-ratio" style={{ "--border-radius": radiusMap[rounded], width: width, aspectRatio: ratio } as React.CSSProperties} className={styles.aspectRatio}>
            {children}
        </div>
    );
};

export default AspectRatio;
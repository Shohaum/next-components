// CSS
import styles from "@/components/breadcrumb/breadcrumbEllipsis.module.css";
// types
import { BreadcrumbEllipsisProps } from "@/types/breadcrumb/breadcrumb";

const BreadcrumbEllipsis = ({
    ...props
}: BreadcrumbEllipsisProps) => (
    <span
        role="presentation"
        aria-hidden="true"
        className={styles.breadcrumbEllipsis}
        {...props}
    >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
        </svg>
        <span className="sr-only">More</span>
    </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export default BreadcrumbEllipsis;

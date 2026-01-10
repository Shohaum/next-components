"use client"
import { useEffect } from "react";

export const useKeyboardNavigation = (
    containerRef: React.RefObject<HTMLElement | null>
) => {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            // stop event from bubbling up
            event.stopPropagation();

            const focusableSelectors =
                'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [tabindex="0"]';

            const items = Array.from(
                container.querySelectorAll(focusableSelectors)
            ).filter(
                (el) =>
                    el instanceof HTMLElement &&
                    el.tabIndex !== -1 &&
                    el.offsetParent !== null
            ) as HTMLElement[];

            console.log(items);

            if (!items.length) return;

            const activeElement = document.activeElement as HTMLElement;

            const currentIndex = items.indexOf(activeElement);

            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    currentIndex === -1
                        ? items[0].focus()
                        : items[(currentIndex + 1) % items.length].focus();
                    break;

                case "ArrowUp":
                    event.preventDefault();
                    currentIndex === -1
                        ? items[items.length - 1].focus()
                        : items[(currentIndex - 1 + items.length) % items.length].focus();
                    break;

                case "Home":
                    event.preventDefault();
                    items[0].focus();
                    break;

                case "End":
                    event.preventDefault();
                    items[items.length - 1].focus();
                    break;
            }
        };

        container.addEventListener("keydown", handleKeyDown, true);
        return () => container.removeEventListener("keydown", handleKeyDown, true);
    }, [containerRef]);

};

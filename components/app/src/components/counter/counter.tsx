import React, { useRef, useEffect } from "react";
// CSS
import styles from "@/components/counter/counter.module.css";
// types
import { CounterProps } from "@/types/counter/counter";

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return (node: T) => {
        refs.forEach(ref => {
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.RefObject<T | null>).current = node;
        });
    };
}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(({ min = 0, max = 10, step = 1, value = 0, onValueChange, ...props }, ref) => {
    const safeStep = Math.min(step, max - min);
    const clampedValue = Math.min(max, Math.max(min, value));
    const translate = min - clampedValue;

    const counterRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const mergedRef = React.useMemo(
        () => mergeRefs<HTMLDivElement>(ref, counterRef),
        [ref]
    );

    const handleTranslate = (step: number) => {
        if (trackRef.current) {
            trackRef.current.style.setProperty("--translate", `${step}lh`);
        }
    };

    const handleDecrement = () => {
        let newValue = clampedValue;
        if (clampedValue - safeStep > min) {
            newValue = clampedValue - safeStep;
        }
        else {
            newValue = min;
        }
        onValueChange?.(newValue);
    };

    const handleIncrement = () => {
        let newValue = clampedValue;
        if (clampedValue + safeStep < max) {
            newValue = clampedValue + safeStep;
        }
        else {
            newValue = max;
        }
        onValueChange?.(newValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(e.target.value);

        if (Number.isNaN(newValue)) return;

        newValue = Math.min(max, Math.max(min, newValue));

        onValueChange?.(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            handleIncrement();
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            handleDecrement();
        }
    };

    useEffect(() => {
        const counterHeight = counterRef?.current?.clientHeight;
        if (counterHeight && trackRef?.current) {
            trackRef.current.style.setProperty("--lineHeight", `${counterHeight}px`);
        }
    }, []);

    useEffect(() => {
        handleTranslate(translate);
    }, [translate]);

    // dev env warning
    useEffect(() => {
        if (process.env.NODE_ENV !== "production" && min > max) {
            console.warn("Counter: min cannot be greater than max");
        }
    }, [min, max]);

    return (
        <div {...props}
            ref={mergedRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="spinbutton"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={clampedValue}
            className={styles.counter}>
            <button disabled={clampedValue === min} onClick={handleDecrement} type="button" aria-label="decrement value">
                <svg width="12" height="12" strokeLinejoin="round" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z" fill="currentColor"></path>
                </svg>
            </button>
            <div className={styles.trackContainer}>
                <input onChange={handleInputChange} type="number" id="quantity" name="quantity" min={min} max={max} step={step} value={clampedValue} required />
                <div ref={trackRef} aria-hidden="true" className={styles.track} data-low-range-out={min} data-high-range-out={max}>
                    {Array.from(
                        { length: max - min + 1 },
                        (_, i) => min + i
                    ).join("\n")}
                </div>
            </div>
            <button disabled={clampedValue === max} onClick={handleIncrement} type="button" aria-label="increment value">
                <svg width="12" height="12" strokeLinejoin="round" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z" fill="currentColor"></path>
                </svg>
            </button>
        </div>
    );
});

Counter.displayName = "Counter";

export default Counter;
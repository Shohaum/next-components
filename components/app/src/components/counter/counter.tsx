import React, { useRef, useState, useEffect } from "react";
// CSS
import styles from "@/components/counter/counter.module.css";
// types
import { CounterProps } from "@/types/counter/counter";

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(({ min = 0, max = 10, step = 1, value = 0, ...props }, ref) => {

    const [currentValue, setCurrentValue] = useState<number>(value);
    const [translate, setTranslate] = useState<number>(min - value);
    const trackRef = useRef<HTMLDivElement>(null);

    const handleTranslate = (step: number) => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateY(${step}lh)`;
        }
    };

    const handleDecrement = () => {
        if (currentValue - step > min) {
            setCurrentValue(prev => prev - step);
            // handle the translate
            handleTranslate(translate + step);
            setTranslate((prev) => prev + step);
        }
        else {
            const remainingSteps = (currentValue - min);
            setCurrentValue((prev) => prev - remainingSteps);
            handleTranslate(translate + remainingSteps);
            setTranslate((prev) => prev + remainingSteps);
        }
    };

    const handleIncrement = () => {
        if (currentValue + step < max) {
            setCurrentValue(prev => prev + step);
            // handle the translate
            handleTranslate(translate - step);
            setTranslate((prev) => prev - step);
        }
        else {
            const remainingSteps = (max - currentValue);
            setCurrentValue((prev) => prev + remainingSteps);
            handleTranslate(translate - remainingSteps);
            setTranslate((prev) => prev - remainingSteps);
        }
    };

    useEffect(() => {
        const counterHeight = document?.querySelector('[data-slot="counter"]')?.clientHeight;
        if (counterHeight && trackRef.current) {
            trackRef.current.style.lineHeight = `${counterHeight}px`;
        }
    }, []);

    useEffect(() => {
        if (translate > 0) {
            setTranslate(0);
            return;
        }
        handleTranslate(translate);
    }, []);

    return (
        <div style={{ ...props.style }} {...props} ref={ref} aria-label="counter" className={styles.counter} data-slot="counter">
            <button disabled={currentValue === min} onClick={handleDecrement} type="button" role="button" aria-label="decrement" aria-roledescription="decrement" data-slot="decrement" aria-controls="counter" aria-activedescendant="counter">
                <svg width="14" height="14" strokeLinejoin="round" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z" fill="currentColor"></path>
                </svg>
            </button>
            <div className={styles.trackContainer}>
                <input contentEditable={false} onChange={(e) => setCurrentValue(Number(e.target.value))} type="number" id="quantity" name="quantity" min={min} max={max} step={step} value={currentValue} required />
                <div ref={trackRef} aria-hidden="true" className={styles.track} data-low-range-out={min} data-high-range-out={max}>
                    {Array.from(
                        { length: max - min + 1 },
                        (_, i) => min + i
                    ).join("\n")}
                </div>
            </div>
            <button disabled={currentValue === max} onClick={handleIncrement} type="button" role="button" aria-label="increment" aria-roledescription="increment" data-slot="increment" aria-controls="counter" aria-activedescendant="counter">
                <svg width="14" height="14" strokeLinejoin="round" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z" fill="currentColor"></path>
                </svg>
            </button>
        </div>
    );
});

Counter.displayName = "Counter";

export default Counter;
export interface CounterProps extends React.ComponentPropsWithoutRef<"div"> {
    min: number;
    max: number;
    step: number;
    value: number;
}
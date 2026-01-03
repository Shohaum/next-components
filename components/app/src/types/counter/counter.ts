export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
    min: number;
    max: number;
    step: number;
    value: number;
    onValueChange?: (value: number) => void;
}
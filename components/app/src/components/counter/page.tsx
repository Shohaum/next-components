"use client"
// utilities
import { useState } from "react";
// component imports
import Counter from "@/components/counter/counter";

const App = () => {
    const [counterValue, setCounterValue] = useState(0);
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* counter */}
            <div style={{ width: "fit-content", height: "1.6rem", background: "var(--themed-matched-color)" }}>
                <Counter min={-10} max={10} step={1} value={counterValue} onValueChange={(value) => setCounterValue(value)} />
            </div>
        </main >
    )
};

export default App;
"use client"
// component
import Label from "@/components/label/label";
import Input from "@/components/input/input";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "min(20rem, 90%)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label style={{ fontSize: "var(--size-sm)" }} htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" style={{ height: "2.25rem", background: "var(--matte-background)", fontSize: "var(--size-sm)", outlineColor: "var(--border-color)" }} />
            </div>
        </main >
    )
};

export default App;
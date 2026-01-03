"use client"
// component imports
import Button from "@/components/button/button";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* button  */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Button onClick={() => alert("clicked")} style={{ background: "var(--matte-background)", fontSize: "var(--size-xsm)", fontWeight: "500" }}>
                        Hey there
                    </Button>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Button onClick={() => alert("clicked")} style={{ background: "var(--matte-background)", fontSize: "var(--size-xsm)", }}>
                        Upload
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path>
                        </svg>
                    </Button>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Button onClick={() => alert("clicked")} style={{ background: "var(--matte-background)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </Button>
                </div>
            </div>
        </main >
    )
};

export default App;
// component imports
import Badge from "@/components/badge/badge";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* badge */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Badge style={{ fontSize: "var(--size-xsm)", fontWeight: 300 }} variant="verified">Verified</Badge>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Badge style={{ fontSize: "var(--size-xsm)", fontWeight: 300 }} variant="primary">Primary</Badge>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Badge style={{ fontSize: "var(--size-xsm)", fontWeight: 300 }} variant="secondary">Secondary</Badge>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Badge style={{ fontSize: "var(--size-xsm)", fontWeight: 300 }} variant="success">Success</Badge>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Badge style={{ fontSize: "var(--size-xsm)", fontWeight: 300 }} variant="danger">Danger</Badge>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Badge style={{ fontSize: "var(--size-xsm)", fontWeight: 300 }} variant="warning">Warning</Badge>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
                    <Badge style={{ fontSize: "var(--size-xsm)", fontWeight: 300, backgroundColor: "var(--blue-800)", color: "var(--white-100)" }}>Default</Badge>
                </div>
            </div>
        </main >
    )
};

export default App;
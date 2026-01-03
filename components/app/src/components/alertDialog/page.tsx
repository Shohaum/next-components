"use client"
// component imports
import AlertDialog from "@/components/alertDialog/alertDialog";
import AlertDialogTrigger from "@/components/alertDialog/alertDialogTrigger";
import AlertDialogContent from "@/components/alertDialog/alertDialogContent";
import AlertDialogHeader from "@/components/alertDialog/alertDialogHeader";
import AlertDialogFooter from "@/components/alertDialog/alertDialogFooter";
import AlertDialogTitle from "@/components/alertDialog/alertDialogTitle";
import AlertDialogDescription from "@/components/alertDialog/alertDialogDescription";
import AlertDialogAction from "@/components/alertDialog/alertDialogAction";
import AlertDialogCancel from "@/components/alertDialog/alertDialogCancel";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* AlertDialog */}
            <div style={{ width: "fit-content", height: "fit-content", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <AlertDialog>

                    <AlertDialogTrigger style={{ backgroundColor: "var(--matte-background)", fontSize: "var(--size-xsm)", outlineColor: "var(--border-color)" }}>
                        Dialog 1
                    </AlertDialogTrigger>

                    <AlertDialogContent style={{ width: "min(32rem, 90%)", background: "var(--matte-background)" }}>
                        <AlertDialogHeader>
                            <AlertDialogTitle style={{ fontSize: "var(--size-md)" } as React.CSSProperties}>Are you absolutely sure?</AlertDialogTitle>

                            <AlertDialogDescription>
                                <p>Please verify your billing information</p>
                                <ul>
                                    <li>Check your card details</li>
                                    <li>Ensure sufficient funds</li>
                                    <li>Verify billing address</li>
                                </ul>
                            </AlertDialogDescription>

                        </AlertDialogHeader>

                        <AlertDialogFooter>
                            <AlertDialogCancel style={{ backgroundColor: "var(--gray-200)", fontSize: "var(--size-xsm)", color: "var(--themed-unmatched-color)" }}>Cancel</AlertDialogCancel>
                            <AlertDialogAction style={{ backgroundColor: "var(--themed-unmatched-color)", fontSize: "var(--size-xsm)", color: "var(--themed-matched-color)" }} onClick={() => alert("Conitue clicked")}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>

                </AlertDialog>

                <AlertDialog>

                    <AlertDialogTrigger style={{ backgroundColor: "var(--matte-background)", fontSize: "var(--size-xsm)", outlineColor: "var(--border-color)" }}>
                        Dialog 2
                    </AlertDialogTrigger>

                    <AlertDialogContent style={{ width: "min(32rem, 90%)", background: "var(--matte-background)" }}>
                        <AlertDialogHeader>
                            <AlertDialogTitle style={{ fontSize: "var(--size-md)" } as React.CSSProperties}>Are you absolutely sure?</AlertDialogTitle>

                            <AlertDialogDescription>
                                <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
                            </AlertDialogDescription>

                        </AlertDialogHeader>

                        <AlertDialogFooter>
                            <AlertDialogCancel style={{ backgroundColor: "var(--gray-200)", fontSize: "var(--size-xsm)", color: "var(--themed-unmatched-color)" }}>Cancel</AlertDialogCancel>
                            <AlertDialogAction style={{ backgroundColor: "var(--themed-unmatched-color)", fontSize: "var(--size-xsm)", color: "var(--themed-matched-color)" }} onClick={() => alert("Conitue clicked")}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>

                </AlertDialog>
            </div>
        </main >
    )
};

export default App;
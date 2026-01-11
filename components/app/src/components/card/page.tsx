import Card from "@/components/card/card";
import CardHeader from "@/components/card/cardHeader";
import CardTitle from "@/components/card/cardTitle";
import CardDescription from "@/components/card/cardDescription";
import CardAction from "@/components/card/cardAction";
import CardContent from "@/components/card/cardContent";
import CardFooter from "@/components/card/cardFooter";

import Input from "@/components/input/input";
import Label from "@/components/label/label";
import Button from "@/components/button/button"

import Link from "next/link";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card className="w-full max-w-sm" style={{ background: "var(--matte-background)", outlineColor: "var(--border-color)" }}>
                <CardHeader>
                    <CardTitle style={{ fontSize: "var(--size-sm)" }}>Login to your account</CardTitle>
                    <CardDescription style={{ fontSize: "var(--size-sm)" }}>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction style={{ fontSize: "var(--size-sm)" }}>
                        <Link href="/register">Sign Up</Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email" style={{ fontSize: "var(--size-sm)" }}>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    style={{ background: "var(--gray-100)", outlineColor: "var(--border-color)" }}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password" style={{ fontSize: "var(--size-sm)" }}>Password</Label>
                                    <Link
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required style={{ background: "var(--gray-100)", outlineColor: "var(--border-color)" }} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full" style={{ fontSize: "var(--size-sm)" }}>
                        Login
                    </Button>
                    <Button className="w-full" style={{ fontSize: "var(--size-sm)" }}>
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}

export default App;
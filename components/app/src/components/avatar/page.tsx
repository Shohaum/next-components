"use client"
// component imports
import Avatar from "@/components/avatar/avatar";
import AvatarImage from "@/components/avatar/avatarImage";
import AvatarFallback from "@/components/avatar/avatarFallback";
import AvatarCollapsed from "@/components/avatar/avatarCollapsed";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Avatar */}
            <div style={{ width: "fit-content", height: "fit-content", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Avatar width={36}>
                        <AvatarImage grayScale={true} src="https://github.com/deno.png" alt="@deno" />
                        <AvatarFallback style={{ backgroundColor: "var(--gray-200)", color: "var(--gray-700)", fontSize: "var(--size-sm)", fontWeight: 500 }}>DN</AvatarFallback>
                    </Avatar>

                    <Avatar showTooltip={true} name="Vercel" designation="SDE - Vercel" width={36}>
                        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                        <AvatarFallback style={{ backgroundColor: "var(--gray-200)", color: "var(--gray-700)", fontSize: "var(--size-sm)", fontWeight: 500 }}>MB</AvatarFallback>
                    </Avatar>
                </div>

                <div>
                    <AvatarCollapsed>

                        <Avatar showTooltip={true} name="Shohaum" designation="Founder - Shohaum" width={36}>
                            <AvatarImage src="https://github.com/shohaum.png" alt="@shohaum" />
                            <AvatarFallback style={{ backgroundColor: "var(--gray-200)", color: "var(--gray-700)", fontSize: "var(--size-sm)", fontWeight: 500 }}>SS</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="Redis" designation="Redis Developer" width={36}>
                            <AvatarImage src="https://github.com/redis.png" alt="@redis" />
                            <AvatarFallback style={{ backgroundColor: "var(--gray-200)", color: "var(--gray-700)", fontSize: "var(--size-sm)", fontWeight: 500 }}>RR</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="Excalidraw" designation="Product Lead - Excalidraw" width={36}>
                            <AvatarImage src="https://github.com/excalidraw.png" alt="@excalidraw" />
                            <AvatarFallback style={{ backgroundColor: "var(--gray-200)", color: "var(--gray-700)", fontSize: "var(--size-sm)", fontWeight: 500 }}>ER</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="Evil Rabbit" designation="Product Designer" width={36}>
                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                            <AvatarFallback style={{ backgroundColor: "var(--gray-200)", color: "var(--gray-700)", fontSize: "var(--size-sm)", fontWeight: 500 }}>ER</AvatarFallback>
                        </Avatar>
                        <Avatar showTooltip={true} name="OpenAI" designation="Founder - OpenAI" width={36}>
                            <AvatarImage src="https://github.com/openai.png" alt="@openai" />
                            <AvatarFallback style={{ backgroundColor: "var(--gray-200)", color: "var(--gray-700)", fontSize: "var(--size-sm)", fontWeight: 500 }}>OA</AvatarFallback>
                        </Avatar>

                    </AvatarCollapsed>
                </div>
            </div>

        </main >
    )
};

export default App;
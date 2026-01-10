"use client"
// component imports
import Image from "next/image";
import AspectRatio from "@/components/aspectRatio/aspectRatio";

const App = () => {
    return (
        <main style={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* aspect ratio */}
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <AspectRatio style={{ width: "min(16rem, 90%)", outline: "1px solid var(--border-color)", borderRadius: "0.5rem" }} ratio={9 / 16}>
                    <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer" fill sizes="(min-width: 1200px) 1200px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 16px)" />
                </AspectRatio>
                <AspectRatio style={{ width: "min(23rem, 90%)", outline: "1px solid var(--border-color)", borderRadius: "0.5rem" }} ratio={16 / 9}>
                    <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer" fill sizes="(min-width: 1200px) 1200px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 16px)" />
                </AspectRatio>
                <AspectRatio style={{ width: "min(16rem, 90%)", outline: "1px solid var(--border-color)", borderRadius: "0.5rem" }} ratio={4 / 3}>
                    <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer" fill sizes="(min-width: 1200px) 1200px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 16px)" />
                </AspectRatio>
                <AspectRatio style={{ width: "min(16rem, 90%)", outline: "1px solid var(--border-color)", borderRadius: "0.5rem" }} ratio={3 / 2}>
                    <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer" fill sizes="(min-width: 1200px) 1200px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 16px)" />
                </AspectRatio>
                <AspectRatio style={{ width: "min(10rem, 90%)", outline: "1px solid var(--border-color)", borderRadius: "0.5rem" }} ratio={1}>
                    <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer" fill sizes="(min-width: 1200px) 1200px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 16px)" />
                </AspectRatio>
                <AspectRatio style={{ width: "min(16rem, 90%)", outline: "1px solid var(--border-color)", borderRadius: "0.5rem" }} ratio={21 / 9}>
                    <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer" fill sizes="(min-width: 1200px) 1200px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 16px)" />
                </AspectRatio>
            </div>
        </main >
    )
};

export default App;
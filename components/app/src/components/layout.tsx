// component imports
import Theme from "@/components/theme/theme";
import DottedGrid from "@/components/grids/dottedGrid";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* theme */}
            <Theme />
            <DottedGrid>

                {children}
            </DottedGrid></>
    );
}

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/app/globals.css";
import {cn} from "@/lib/utils";

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});

export const metadata: Metadata = {
    title: "Client",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable
            )}
        >
        {children}
        </body>
        </html>
    );
}

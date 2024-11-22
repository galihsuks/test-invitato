import type { Metadata } from "next";
import {
    Italiana,
    Bodoni_Moda,
    Josefin_Sans,
    Coustard,
} from "next/font/google";
import "./globals.css";

const italiana = Italiana({
    subsets: ["latin"],
    variable: "--font-italiana",
    weight: "400",
});
const coustard = Coustard({
    subsets: ["latin"],
    variable: "--font-coustard",
    weight: "400",
});
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    variable: "--font-bodoni",
    weight: ["400", "500", "600", "700", "800", "900"],
});
const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    variable: "--font-josefin",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Test Invitato",
    description: "Wedding Website Invitation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${coustard.variable} ${bodoniModa.variable} ${josefinSans.variable} ${italiana.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}

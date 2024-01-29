import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(layout)/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "BAMM-BAMM",
	description: "BAMM-BAMM is a meme token.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={cn(inter.className, "bg-zinc-800 text-zinc-100")}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

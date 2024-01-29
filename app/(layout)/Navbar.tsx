import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-semibold text-xl tracking-tight">BAMM-BAMM</span>
			</div>
			<div>
				<Link href="/" className={buttonVariants({ variant: "link" })}>
					Home
				</Link>
				<Link href="/blog" className={buttonVariants({ variant: "link" })}>
					Blog
				</Link>
			</div>
		</nav>
	);
};

import { buttonVariants } from "@/components/ui/button";
import { MaskOffIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6 bg-gray-950 border-b border-white/10">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-semibold text-lg md:text-xl tracking-tight">
					🧨 BAMM-BAMM
				</span>
			</div>
			<div>
				<Link
					href="/"
					className={buttonVariants({ variant: "link", class: "px-2" })}
				>
					Home
				</Link>
				<Link
					href="/blog"
					className={buttonVariants({ variant: "link", class: "px-2" })}
				>
					Blog
				</Link>
			</div>
		</nav>
	);
};

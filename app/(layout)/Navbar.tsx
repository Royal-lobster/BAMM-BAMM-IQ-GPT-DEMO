import { buttonVariants } from "@/components/ui/button";
import { MaskOffIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6 bg-gray-950 border-b border-white/10">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<MaskOffIcon className="w-8 h-8 mr-2" />
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

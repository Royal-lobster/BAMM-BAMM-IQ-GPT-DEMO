import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
	return (
		<section className="bg-zinc-700 py-20">
			<div className="flex items-center container mx-auto">
				{/* <!-- Text and CTA Buttons Column --> */}
				<div className="flex flex-wrap flex-col w-full md:w-1/2 p-4 text-center md:text-left">
					<h1 className="text-5xl font-bold mb-4">
						Join the BAMM-BAMM Meme Revolution!
					</h1>
					<p className="mb-6">
						Dive into the world of digital art and meme culture with the
						BAMM-BAMM token.
					</p>
					<div className="flex gap-2">
						<Button>Get Started</Button>
						<Button variant="secondary">Learn More</Button>
					</div>
				</div>

				{/* <!-- Image Column --> */}
				<div className="w-full md:w-1/2 p-4">
					<Image
						src="/assets/hero.png"
						alt="BAMM-BAMM"
						width={500}
						height={280}
						className="rounded-lg shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
}

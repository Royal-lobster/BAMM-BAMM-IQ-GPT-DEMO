import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
	return (
		<section className="bg-gradient-to-b py-10 from-gray-950 to-gray-900">
			<div className="flex items-center container mx-auto">
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
				<div className="w-full md:w-1/2 p-4">
					<Image
						src="/images/hero.png"
						alt="BAMM-BAMM"
						width={500}
						height={280}
					/>
				</div>
			</div>
		</section>
	);
}

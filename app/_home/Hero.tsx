import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
	return (
		<section className="bg-gradient-to-b py-10 from-gray-950 to-gray-900">
			<div className="flex items-center container mx-auto flex-wrap">
				<div className="flex flex-wrap flex-col w-full md:w-1/2 p-4 text-center md:text-left">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
						Blast Off to Meme Stardom with BAMM-BAMM!
					</h1>
					<p className="mb-6 text-sm md:text-base">
						Get in on the ground floor of the meme economy with the ultimate
						token that's all about the LOLs and the gains. Join us, and let's
						rocket to the moon – meme style!
					</p>
					<div className="flex justify-center md:justify-start flex-wrap gap-2">
						<Button>Get Your Meme On!</Button>
						<Button variant="secondary">The BAMM-BAMM Lowdown</Button>
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

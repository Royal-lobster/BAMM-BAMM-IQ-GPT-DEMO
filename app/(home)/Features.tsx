import {
	ImageIcon,
	PaperPlaneIcon,
	PersonIcon,
	QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import React from "react";

export const Features = () => {
	return (
		<section className="py-12 bg-gray-800">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4">
						Why BAMM-BAMM? Because Normal is Boring!
					</h2>
					<p className="text-lg text-gray-400">
						We're not just another token on the block(chain). We're the giggle
						at your screen, the ROFL in your wallet. Discover the perks of being
						memetastic with us.
					</p>
				</div>
				<div className="flex flex-wrap">
					<div className="flex-1 px-4 mb-8 flex flex-col items-center justify-center">
						<ImageIcon className="h-14 w-14 bg-gray-900 p-4 rounded mb-2" />
						<h3 className="text-xl font-semibold mb-2">
							Unleash Your Inner Meme Lord
						</h3>
						<p className="text-gray-400 max-w-96 text-center">
							Become the meme wizard you were always destined to be with our
							slick generator.
						</p>
					</div>
					<div className="flex-1 px-4 mb-8 flex flex-col items-center justify-center">
						<PaperPlaneIcon className="h-14 w-14 bg-gray-900 p-4 rounded mb-2" />
						<h3 className="text-xl font-semibold mb-2">
							NFTs, But Make It Meme
						</h3>
						<p className="text-gray-400 max-w-96 text-center">
							Dank memes meet digital art, and they've never looked better. Buy,
							sell, and trade the trendiest meme NFTs.
						</p>
					</div>
					<div className="flex-1 px-4 mb-8 flex flex-col items-center justify-center">
						<PersonIcon className="h-14 w-14 bg-gray-900 p-4 rounded mb-2" />
						<h3 className="text-xl font-semibold mb-2">
							Democra-meme Your Decisions
						</h3>
						<p className="text-gray-400 max-w-96 text-center">
							Got opinions? We love that. Vote on the dankest of decisions and
							steer the meme ship.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

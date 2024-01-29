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
					<h2 className="text-4xl font-bold mb-4">Why Choose BAMM-BAMM?</h2>
					<p className="text-lg text-gray-400">
						Discover the unique features of our meme-inspired token.
					</p>
				</div>
				<div className="flex flex-wrap">
					<div className="flex-1 px-4 mb-8 flex flex-col items-center justify-center">
						<ImageIcon className="h-14 w-14 bg-gray-900 p-4 rounded mb-2" />
						<h3 className="text-xl font-semibold mb-2">Meme Generator</h3>
						<p className="text-gray-400 max-w-96 text-center">
							Create and share your memes directly on our platform.
						</p>
					</div>
					<div className="flex-1 px-4 mb-8 flex flex-col items-center justify-center">
						<PaperPlaneIcon className="h-14 w-14 bg-gray-900 p-4 rounded mb-2" />
						<h3 className="text-xl font-semibold mb-2">NFT Marketplace</h3>
						<p className="text-gray-400 max-w-96 text-center">
							Exclusive access to meme-themed NFTs and digital art.
						</p>
					</div>
					<div className="flex-1 px-4 mb-8 flex flex-col items-center justify-center">
						<PersonIcon className="h-14 w-14 bg-gray-900 p-4 rounded mb-2" />
						<h3 className="text-xl font-semibold mb-2">Community Voting</h3>
						<p className="text-gray-400 max-w-96 text-center">
							Your voice matters - participate in community decisions.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

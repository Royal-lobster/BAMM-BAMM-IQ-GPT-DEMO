import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-10">
				<div className="flex flex-col md:flex-row text-center md:text-left -mx-4 justify-between">
					<div className="flex-1 max-w-[600px] px-4 mb-6 md:mb-0">
						<h5 className="text-xl font-bold mb-6">About BAMM-BAMM</h5>
						<p className="text-gray-400">
							The home of meme lovers and the ultimate crypto for the LOLs and
							ROFLs. Join us and let's take this rocket to the moon –
							meme-style!
						</p>
					</div>
					<div className="flex-1 max-w-[600px] px-4 space-y-2">
						<h5 className="text-xl font-bold">Stay in the Loop</h5>
						<p className="text-gray-400">
							Sign up for our newsletter to get the latest memes and token news.
						</p>
						<form className="space-y-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="border-gray-700 text-center md:text-left"
							/>
							<Button type="submit" className="w-full" variant="secondary">
								Subscribe
							</Button>
						</form>
					</div>
				</div>
				<div className="text-center mt-10 border-t border-gray-800 pt-10">
					<p className="text-gray-400">
						&copy; {new Date().getFullYear()} BAMM-BAMM. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

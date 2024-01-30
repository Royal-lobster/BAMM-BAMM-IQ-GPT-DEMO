import React from "react";

const Testimonials = () => {
	return (
		<section className="py-12 bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Peep What the Meme Squad Thinks!
					</h2>
					<p className="text-lg text-gray-400">
						Don't just take our word for it – check out the rave reviews from
						our memetastic community!{" "}
					</p>
				</div>

				<div className="flex flex-wrap -mx-4">
					<div className="w-full md:w-1/3 px-4 mb-8">
						<div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
							<p className="text-gray-400 mb-4">
								"BAMM-BAMM turned my meme game from 'meh' to 'wow'! Can't stop,
								won't stop memeing."
							</p>
							<h3 className="text-xl font-semibold mb-2">- Alex Johnson</h3>
						</div>
					</div>

					<div className="w-full md:w-1/3 px-4 mb-8">
						<div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
							<p className="text-gray-400 mb-4">
								"As a meme artist, the BAMM-BAMM marketplace is where my
								creations find soulmates. It's a match made in meme heaven!"
							</p>
							<h3 className="text-xl font-semibold mb-2">- Sarah Kim</h3>
						</div>
					</div>

					<div className="w-full md:w-1/3 px-4 mb-8">
						<div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
							<p className="text-gray-400 mb-4">
								"Every vote feels like I'm choosing the next meme president.
								Absolute power? Yes, please!"
							</p>
							<h3 className="text-xl font-semibold mb-2">- Miguel Santos</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
	return (
		<div className="bg-gradient-to-b py-10 from-gray-900 to-gray-950">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
					Frequently Asked (and Hilarious) Questions
				</h2>
				<Accordion className="container mx-auto" type="single" collapsible>
					<AccordionItem value="item1">
						<AccordionTrigger>
							Why did the meme cross the blockchain?
						</AccordionTrigger>
						<AccordionContent>
							To get to the other side of the transaction! But seriously,
							BAMM-BAMM tokens are all about bridging fun and finance.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item2">
						<AccordionTrigger>
							Can BAMM-BAMM tokens make me fly?
						</AccordionTrigger>
						<AccordionContent>
							Only if you throw your computer with your digital wallet out the
							window. We recommend against that.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item3">
						<AccordionTrigger>
							Is it true that BAMM-BAMM has a Ph.D. in Memeology?
						</AccordionTrigger>
						<AccordionContent>
							Absolutely, and we graduated summa cum laude from the University
							of the Internet, thank you very much.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item4">
						<AccordionTrigger>
							What if I'm only funny accidentally?
						</AccordionTrigger>
						<AccordionContent>
							Then BAMM-BAMM is your chance to shine intentionally! With our
							meme generator, accidents are the next big hit.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item5">
						<AccordionTrigger>
							Will BAMM-BAMM ever go to the moon?
						</AccordionTrigger>
						<AccordionContent>
							We're not just going to the moon; we're hosting the first
							intergalactic meme party there. You're invited!
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default FAQSection;

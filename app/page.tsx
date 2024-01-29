import FAQSection from "./_home/FAQ";
import { Features } from "./_home/Features";
import { Hero } from "./_home/Hero";
import Testimonials from "./_home/Testimonials";

export default function Home() {
	return (
		<main>
			<Hero />
			<Features />
			<Testimonials />
			<FAQSection />
		</main>
	);
}

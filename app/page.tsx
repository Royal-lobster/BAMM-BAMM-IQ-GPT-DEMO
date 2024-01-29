import FAQSection from "./(home)/FAQ";
import { Features } from "./(home)/Features";
import { Hero } from "./(home)/Hero";
import Testimonials from "./(home)/Testimonials";

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

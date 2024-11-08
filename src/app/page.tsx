"use client";

import { Hero } from "./components/Hero";
import { ParallaxText } from "./components/ParallaxText";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { Suspense, useRef } from "react";
import { LineUps } from "./components/lineUps/LineUps";
import { EventInfo } from "./components/eventInfo/EventInfo";
import { EmailForm } from "./components/forms/emailForm";
import { EventsCalendar } from "./components/calendar/EventsCalendar";
import { OurFooter } from "./components/OurFooter";
import { ParallaxProvider } from "react-scroll-parallax";
import { Galery } from "./components/galery/Galery";
import EventCarousel from "./components/eventInfo/Carousel";
import { About } from "./components/about/About";
import Sponsors from "./components/sponsors/Sponsors";
import PricingPanel from "./components/pricing/PricingPanel";
import ContactForm from "./components/ContactForm";
export default function Home() {
	const transitionRef = useRef(null);
	const isInView = useInView(transitionRef, { once: false });
	const transitionStyle = {
		transform: isInView ? "none" : "translateX(-200px)",
		opacity: isInView ? 1 : 0,
		transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
	};
	return (
		<ParallaxProvider>
			<div className="norwester-font scroll-smooth w-full h-full bg-background text-foreground flex flex-col items-center justify-between mx-0">
				<Hero />
				<div className="my-5 h-[300px] sm:h-[200px] md:h-[250px] lg:h-[300px]" id="stripes">
  <div className="h-[10px] sm:h-[5px] md:h-[8px] lg:h-[10px]">
    <ParallaxText
      rotationDeg={5}
      bgColor="#E6B358"
      textColor="#000000"
      baseVelocity={1}
      textToShow="LEARN THE TOOLS TO END YOUR SKILLED WORKER SHORTAGE"
    />
  </div>
  <div className="h-[10px] sm:h-[5px] md:h-[8px] lg:h-[10px]">
    <ParallaxText
      rotationDeg={-5}
      bgColor="#fefeff"
      textColor="#000000"
      baseVelocity={-1}
      textToShow="APPLY LEARNINGS TO ACQUIRE TALENT AT THE 2025 CAREER DAY"
    />
  </div>
</div>

				<LineUps />
				<div className="w-full   flex justify-center items-center flex-col">
					<EventInfo data={{}} />
					{/* <EmailForm /> */}
				</div>

				<EventCarousel />

				<EventsCalendar />
				<About />
				<Sponsors />
				<EventInfo
					data={{
						subTitle: "B2C EVENT",
						title: "GREEN ENERGY CAREER DAY - SUMMER 2025",
						description:
							"By joining the B2B kickoff event with a Transitional Package or above, you automatically secure your spot at the Green Energy Career Day, launching in summer 2025, with a 50% discount. Around 2,000 impact-driven jobseekers are expected–all eager to power the food, energy, and water nexus with companies doing the same. Here, our corporate partners can engage in matchmaking and speed-dating sessions with top candidates committed to decarbonising our shared atmosphere.",
						imageOrder: 1,
						contentOrder: 2,
					}}
				/>
				<PricingPanel />
				<ContactForm />
				{/* <OurBlog /> */}
			</div>
		</ParallaxProvider>
	);
}

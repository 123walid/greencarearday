// empty festivalInfo component

import { useParallax } from "react-scroll-parallax";
import { RandomImage } from "../RandomImage";
import { motion } from "framer-motion";
import Image from "next/image";
import EventCarousel from "./Carousel";

export const EventInfo = ({
	data = {
		imageOrder: 1,
		contentOrder: 2,
	},
}: {
	data: {
		image?: string;
		title?: string;
		description?: string;
		buttonText?: string;
		subTitle?: string;
		imageOrder?: 1 | 2;
		contentOrder?: 1 | 2;
	};
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -250 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
			className=" box-border  flex relative mt-[60px]  flex-row shrink-0 gap-5  w-full max-w-[1300px]  max-md:flex max-md:flex-row max-md:flex-wrap max-md:justify-around max-sm:flex max-sm:flex-col p-5"
		>
			<motion.img
				// rotate image infinitely
				animate={{ rotate: 360 }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "linear",
				}}
				alt="Card background"
				loading="eager"
				width={750}
				height={750}
				src={data.image || "/images/cercleArrow.png"}
				className={`box-border order-${data.imageOrder}  overflow-hidden  p-2.5  w-full aspect-[1.5] max-w-[550px] min-h-[20px] min-w-[20px] max-md:w-full max-md:max-w-[500px] max-sm:h-[300px]  object-contain`}
			/>{" "}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				className={`box-border flex relative flex-col w-full p-2.5 self-stretch h-auto max-sm:flex max-sm:flex-col order-${data.contentOrder}`}
			>
				<div className="box-border relative shrink-0 mt-5 h-auto text-sm">
					{data.subTitle || "THE KICKOFF EVENT"}
				</div>
				<div className="box-border relative shrink-0 mt-5 h-auto text-3xl max-sm:text-xl">
					{data.title || "JOIN US ON JUNE 26TH IN BERLIN"}
				</div>
				<div className="box-border relative shrink-0 mt-5 w-full h-auto text-md max-w-[500px] ">
					{data.description ||
						"It’s time to bring together talent acquisition experts and company representatives leading the drive to a cleaner Earth: Our exclusive kickoff event will give all attendees the skills and insight to end their skilled worker shortage while connecting them with potential clients from across the food, energy and water nexus. Best of all: Sponsors with a Transition package or above receive a 50% discount to exhibit at the 2025 Green Energy Career Day."}
					<br />
				</div>
				<a href="/#packages">
					<motion.button
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="max-md:place-self-center hover:bg-background hover:text-focus  border-focus border-2  hover:border-focus transition-all duration-300  uppercase box-border relative shrink-0 px-6 py-4 mt-5 text-center text-black bg-focus rounded appearance-none cursor-pointer max-w-[200px]"
					>
						{data.buttonText || "See All Packages"}
					</motion.button>
				</a>
			</motion.div>
			<br />
		</motion.div>
	);
};

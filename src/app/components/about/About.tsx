// empty festivalInfo component

import { useParallax } from "react-scroll-parallax";
import { RandomImage } from "../RandomImage";
import { motion } from "framer-motion";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -250 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
			className="min-h-[90dvh] py-[120px]  my-5 box-border flex relative flex-row  shrink-0 gap-5  w-full max-w-full  max-md:flex max-md:flex-row max-lg:flex-wrap max-md:justify-around max-sm:flex max-sm:flex-col max-md:p-5"
		>
<div className="basis-full relative max-lg:max-h-[60dvh]  lg:min-h-[90dvh] xl:basis-6/12  flex flex-row justify-center items-center p-5   lg:pr-[80px] lg:pt-[80px] bg-focus ">
  {/* Rotating Image */}
  <motion.img
    animate={{ rotate: 360 }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
    alt="Card background"
    loading="eager"
    src="/images/cercleArrow_transparent.png"
    className="absolute top-[-30px] right-[-30px] lg:right-[-40px] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] object-contain"
  />
  
  {/* Bear Image */}
  <motion.img
    initial={{ opacity: 0, x: -50, y: 50 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    alt="Hidden Berlin Bear"
    loading="eager"
    src="/images/HiddenBerlin_Bear.png"
    className="box-border object-contain w-[90%] h-auto max-w-full max-h-full z-[10]"
  />
</div>

			<div className="xl:basis-6/12 basis-full flex justify-center">
				<motion.div
					initial={{ opacity: 0, x: 450 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="box-border flex justify-center relative flex-col w-full p-2.5 self-stretch h-auto max-sm:flex max-sm:flex-col max-lg:basis-full basis-9/12  max-lg:p-5"
				>
					<div className="uppercase box-border relative shrink-0 mt-5 h-auto text-sm">
						100% Networking
					</div>
					<div className="uppercase box-border relative shrink-0 mt-5 h-auto text-3xl max-sm:text-xl">
						Be part of an international cohort of corporate environmental stewards
					</div>
					<div className="box-border relative shrink-0 mt-5 w-full h-auto text-md  space-y-5">
						Participating in the Green Energy Career Day offers partnering companies a
						valuable platform to strengthen industry connections while promoting
						cross-border sustainability initiatives. Every insight session in talent
						acquisition required to power the transition is followed by networking to
						allow all participants to form new relationships and clients.
						<Accordion>
							<AccordionItem
								key="1"
								aria-label="Details"
								subtitle="Press To Expand"
								title="Details"
							>
								<ul className="list-disc pl-5 ">
									<li>
										<span className="text-focus">Development Opportunities:</span>{" "}
										Establish contact with firms in the green energy, mobility and
										construction sectors for new research, sales and partnerships.
									</li>
									<li>
										<span className="text-focus">Collaborative Opportunities: </span>Meet
										representatives from international organisations to discuss
										cross-border talent opportunities related to green skills and
										sustainability.
									</li>
									<li>
										<span className="text-focus">Highlight expertise: </span>Meet Showcase
										your sustainable technologies and practices to new potential industry
										partners from the nexus of food, energy and water.
									</li>
								</ul>
							</AccordionItem>
						</Accordion>
						<p className="text-md">
							Following a day in the historic AMAN-ULLAH conference room, tipBerlin
							will continue the networking possibilities via a river cruise on the
							Spree.
						</p>
						<p className="text-md">
							Please <span className="text-focus">contact us </span> to discuss
							additional community integrated promotion of your sustainability
							initiatives and job opportunities via targeted media placement.
						</p>
					</div>
					<a href="#contact">
						<motion.button
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="max-md:place-self-center hover:bg-background hover:text-focus  border-focus border-2  hover:border-focus transition-all duration-300  uppercase box-border relative shrink-0 px-6 py-4 mt-5 text-center text-black bg-focus rounded appearance-none cursor-pointer max-w-[200px]"
						>
							Contact us
						</motion.button>
					</a>
				</motion.div>
			</div>
			<br />
		</motion.div>
	);
};

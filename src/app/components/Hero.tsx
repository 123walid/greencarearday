"use client";
import { HiChevronDown } from "react-icons/hi";
import CountDown from "./CountDown";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTrail, a } from "@react-spring/web";
import Image from "next/image";

export const Hero = () => {
	return (
		// make Hero component that cover the whole screen
		<motion.div className="flex items-center justify-start w-full max-md:text-4xl text-[43px] sm:h-[75dvh] h-[55dvh] ">
			<div className="flex items-center justify-center w-full ">
				<div className="flex flex-col gap-y-5 text-center basis-full  justify-center items-center ">
					<div className=" font-bold  gap-y-1  uppercase flex flex-col items-center 2xl:text-[90px] lg:text-[65px] sm:text-[48px] max-sm:text-[20px]   ">
					<motion.div
						initial={{ opacity: 0, y: -200 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2, delay: 0.2, bounce: 0.5 }}
						className="w-full transition-all duration-1s max-sm:max-h-[20px] sm:max-h-[48px] 2xl:max-h-[90px] lg:max-h-[65px] p-0 text-[30px] font-light"
						style={{ color: '#9AF8B3' }}
					>
						29 NOVEMBER 2024
					</motion.div>

						
						<motion.div
							initial={{ opacity: 0, y: -200 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.2, bounce: 0.5 }}
							className={
								"w-full  transition-all duration-1s  max-sm:max-h-[20px] sm:max-h-[48px]   2xl:max-h-[90px] lg:max-h-[65px] p-0"
							}
						>
							JOIN THE EXCLUSIVE
						</motion.div>{" "}
						<motion.div
							initial={{ opacity: 0, y: -250 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2 }}
							className={`text-focus   transition-all duration-1s   max-sm:max-h-[20px] sm:max-h-[48px]   2xl:max-h-[90px] lg:max-h-[65px]   p-0 `}
						>
							<span className="text-foreground"> KICKOFF </span> B2B EVENT IN BERLIN
						</motion.div>
					</div>
					<CountDown targetDate={new Date("2024-11-29")} />
					<div className="flex justify-center items-center pt-[50px]">
						<div className="rounded-full bg-focus p-4">
							<a href="#stripes">
								<HiChevronDown className="text-2xl text-background" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

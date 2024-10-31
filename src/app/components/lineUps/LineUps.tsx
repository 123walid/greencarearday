"use client";
import Image from "next/image";
import * as React from "react";
import OneLineUp from "./OneLineUp";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export function LineUps() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 250 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="box-border flex relative flex-col shrink-0  py-0 mb-[60px]  w-full max-w-[1300px] px-5  scrollbar-hide"
		>
			<div className="box-border text-bold relative shrink-0 mt-5 h-auto text-sm">
				GREEN TALENT ACQUISITION
			</div>
			<div className="box-border relative shrink-0 pb-8 mt-5 h-auto text-5xl border-b-2 border-b-black max-sm:text-5xl">
				THE LINE-UP
			</div>
			<OneLineUp
				title="InnoEnergy"
				description="Building the new energy talent pipeline for Europe"
				delay={0}
			/>
			<OneLineUp
				title="IOM"
				description="Intelligent Flow: Leveraging skills mobility partnerships for the Green Transition"
				delay={0.2}
			/>
			<OneLineUp
				title="Jordan Engineers Association"
				description="Strategies and tools for managing teams across borders."
				delay={0.4}
			/>
			<OneLineUp
				title="Italian Academy of Biophilia"
				description="Leveraging humanity's interconnectedness with Nature to attract and retain staff"
				delay={0.6}
			/>{" "}
			<OneLineUp
				title="PROF. DR. SARA RAVAN RAMZANI + PROF. DR. RALF FRANK"
				description="Storytelling in Sustainability: Embracing Authentic Narratives"
				delay={0.8}
			/>
			{/* <OneLineUp
				title="Prof. Dr. Ralf Frank"
				description="Communicating sustainability achievements as part of an authentic company-wide approach to talent and customer acquisition."
				delay={1.2}
			/> */}
		</motion.div>
	);
}

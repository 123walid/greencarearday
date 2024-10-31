"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { HiOutlineTicket, HiTicket } from "react-icons/hi";
import { HiMiniTicket } from "react-icons/hi2";
import { useParallax } from "react-scroll-parallax";

export function OurFooter() {
	return (
		<motion.div className="box-border flex relative flex-col p-5  w-full   max-sm:p-5 bg-background text-foreground ">
			<motion.div
				initial={{ opacity: 0, x: 250, rotateX: 90 }}
				whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
				transition={{ duration: 1 }}
				className="box-border relative  pb-8 mt-5 h-auto text-5xl max-sm:text-xl"
			>
				<div>
					JOIN THE PREMIER EVENT
					<br />
				</div>
				<div>FOR A COOLER EARTH</div>
			</motion.div>
			<div className="box-border flex relative flex-row  gap-2.5 justify-between items-center pb-5 mt-5 border-b border-b-neutral-200">
				<div className="box-border flex relative flex-row  gap-2.5 justify-around">
					<a
						href="/"
						className="hover:text-focus  transition-all duration-[500ms] box-border relative  h-auto text-base font-semibold text-white max-sm:mt-0 max-sm:mr-0 max-sm:text-sm"
					>
						Home
						<br />
					</a>
					<a
						href="/#packages"
						className="hover:text-focus  transition-all duration-[500ms] box-border relative  h-auto text-base font-semibold text-white max-sm:mt-0 max-sm:mr-0 max-sm:text-sm"
					>
						Packages
						<br />
					</a>
					<a
						href="/imprint"
						className="hover:text-focus  transition-all duration-[500ms] box-border relative  h-auto text-base font-semibold text-white max-sm:mt-0 max-sm:mr-0 max-sm:text-sm"
					>
						Imprint & Privacy
						<br />
					</a>
				</div>
				<HiOutlineTicket className="text-white w-[50px] h-[50px] rotate-90" />
			</div>
			<div className="box-border relative  pb-8 mt-5 h-auto text-lg text-neutral-400 max-sm:text-base">
				<div>
					© 2024. All Rights Reserved.
					<br />
				</div>
			</div>
		</motion.div>
	);
}

import Image from "next/image";
import * as React from "react";

import participationPackges from "./participationPricing.json";
import sponsorshipPackages from "./sponsorshipPricing.json";
import { motion } from "framer-motion";
import ParticipationPackage, { PackageType } from "./ParticipationPackage";
import SponsorshipPackage from "./SponsorshipPackage";
function PricingPanel() {
	return (
		<div
			id="packages"
			className="bg-background text-foreground box-border flex relative flex-col  justify-center items-center my-5 justify-center"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: 1,
				}}
				className="box-border relative  mt-5 h-auto text-4xl max-sm:text-center mb-5"
			>
				<span className="uppercase">Network Packages </span>
			</motion.div>
			<div className="box-border  relative w-full xl:w-3/4 p-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-y-5">
				{participationPackges.packages.map((pkg: any, index) => (
					<ParticipationPackage key={index} data={pkg} />
				))}
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
				className="text-focus box-border relative justify-center  mt-5 h-auto text-base max-sm:text-xs max-sm:text-center p-5 flex w-10/12 "
			>
				<span className="text-center ">
					Book a Transition, Integrated or Leader Package by 31.08.2024 to secure the
					discount rate to present and interview at the Green Energy Career Day 2025
				</span>
				<br />
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: 1,
				}}
				className="box-border relative  mt-5 h-auto text-4xl max-sm:text-center mb-5"
			>
				<span className="">SPONSORSHIP PACKAGES </span>
			</motion.div>
			<div className="box-border relative w-full md:w-11/12 xl:w-3/4 p-2  grid grid-cols-1 md:grid-cols-2   gap-y-5 ">
				{sponsorshipPackages.sponsorship_packages.map((pkg: any, index) => (
					<SponsorshipPackage key={index} data={pkg} />
				))}
			</div>
		</div>
	);
}
export default PricingPanel;

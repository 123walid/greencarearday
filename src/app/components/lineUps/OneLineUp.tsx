// empty lineUp component

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

export default function OneLineUp({
	title,
	description,
	delay = 0,
}: {
	title: string;
	description: string;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 150 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: delay }}
			className="box-border flex relative flex-row mt-2  gap-2.5 justify-between items-center p-3  w-full border-b border-b-neutral-200 max-sm:w-full"
		>
			<div className="box-border flex relative flex-row basis-full md:basis-11/12 items-start sm:items-end max-sm:flex max-sm:flex-col">
				<div className="box-border relative  mt-5 h-auto  uppercase   ">
					<span className="text-2xl">{title}</span>
					<small className="text-lg text-gray-400"> / {description}</small>
				</div>
			</div>
			<HiArrowUpRight
				className="hover:scale-[2] transition-all duration-[800ms] "
				size={20}
			/>
		</motion.div>
	);
}

import * as React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import Link from "next/link";

export function CustomEvent({
	delay = 0,
	insight = "",
	time = "",
	content = "",
}: {
	delay?: number;
	insight: string;
	time: string;
	content: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 150 }}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: { duration: 0.5, delay: delay },
			}}
			className=" box-border flex relative flex-row  gap-2.5 justify-end items-center p-2 w-full border-b max-sm:flex max-sm:flex-col max-sm:gap-0 max-sm:pb-5 max-sm:w-full"
		>
			<div className="basis-full sm:basis-4/12box-border flex relative flex-col  max-h-[100px] min-h-[70px] max-sm:flex max-sm:flex-col max-sm:max-h-[100px] max-sm:min-h-[50px] max-sm:items-center">
				<div className="box-border relative  mt-5 h-auto text-2xl max-md:text-sm">
					{insight}
				</div>
				<div className="box-border   h-auto text-focus   max-md:text-sm ">
					AT {time}
					<br />
				</div>
			</div>
			<div className="basis-full sm:basis-7/12box-border relative pt-5 h-auto text-sm max-h-[100px] min-h-[70px] max-md:text-xs max-sm:max-h-[100px] max-sm:min-h-[50px] max-sm:text-center">
				{content}
			</div>
			<div className="basis-full sm:basis-1/12 ">
				<Link href={"/speakers"}>
				
				<HiArrowUpRight
					
					size={20}
					className="max-sm:my-5 hover:scale-[2] transition-all duration-[800ms] cursor-pointer"
					
				/>
				</Link>
			</div>
		</motion.div>
	);
}

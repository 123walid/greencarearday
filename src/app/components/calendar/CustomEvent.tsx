import * as React from "react";
import { motion } from "framer-motion";

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
			className="box-border flex flex-col gap-4 w-full mb-6"
		>
			<div className="flex flex-row gap-2.5 sm:gap-4 justify-between w-full max-sm:flex-col">
				<div className="basis-full sm:basis-4/12 flex flex-col items-center">
					<div className="text-2xl max-md:text-sm text-center mt-5">{insight}</div>
					<div className="text-focus max-md:text-sm mt-2 text-center">
						AT {time}
					</div>
				</div>
				<div className="basis-full sm:basis-7/12 text-sm max-md:text-xs pt-5 text-center sm:text-left">
					{content}
				</div>
			</div>
			{/* Separator Line */}
			<div className="w-full border-b border-gray-300"></div>
		</motion.div>
	);
}

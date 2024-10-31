import { motion } from "framer-motion";
import Image from "next/image";

export function BlogCard() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 250, rotate: -45 }}
			whileInView={{ opacity: 1, y: 0, rotate: 0 }}
			transition={{ duration: 1.5 }}
			className="box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto w-[250px]"
		>
			<Image
				alt="Card background"
				loading="eager"
				width={700}
				height={700}
				src="https://cdn.builder.io/api/v1/image/assets%2Fde871d103ef940d893aca4cc1cc01929%2Ff03dddd67b7f4f7cbd8d074fd9d5002c"
				className="box-border object-cover overflow-hidden shrink-0 aspect-[1.5] h-[250px] max-w-[250px] min-h-[20px] min-w-[20px] w-[300px]"
			/>
			<div className="box-border relative shrink-0 mt-5 h-auto text-sm">BLUES</div>
			<div className="box-border relative shrink-0 mt-5 h-auto text-lg max-sm:text-lg">
				MUSIC LOVERS PREFER TO BUY TICKETS ONLINE
			</div>
			<div className="box-border flex relative flex-row shrink-0 gap-2.5 mt-5">
				<div className="box-border relative shrink-0 h-auto text-base text-neutral-400 max-sm:mt-0 max-sm:mr-0 max-sm:text-base">
					Apr 21,2020
					<br />
				</div>
				<div className="box-border relative shrink-0 h-auto text-base text-neutral-400 max-sm:mt-0 max-sm:mr-0 max-sm:text-base">
					<span className="text-base not-italic ">0 Comments</span>
					<br />
				</div>
			</div>
		</motion.div>
	);
}

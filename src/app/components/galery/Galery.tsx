import { motion } from "framer-motion";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

export function Galery() {
	return (
		<div className="w-full bg-foreground flex justify-center items-center p-5 min-h-[80dvh]">
			<div className="box-border  flex relative flex-row max-md:flex-wrap justify-around items-center  gap-5 justify-around mb-[60px] w-full max-w-[900px]  max-sm:p-5 ">
				<div className="box-border relative  h-auto text-sm basis-8/12 md:basis-4/12 ">
					<motion.img
						initial={{ opacity: 0, x: -150, y: 150 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 1 }}
						alt="Card background"
						loading="eager"
						width={500}
						height={600}
						src="images/img1.jpeg"
						className="box-border object-cover overflow-hidden   h-[400px]  w-full   "
					/>
				</div>
				<div className="box-border relative  h-auto text-sm w-full md:basis-8/12">
					<motion.img
						initial={{ opacity: 0, x: 150, y: 0 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 1 }}
						alt="Card background"
						loading="eager"
						width={500}
						height={600}
						src="images/img2.jpeg"
						className="box-border object-cover overflow-hidden grow   h-[400px]  w-full  "
					/>
				</div>
			</div>
		</div>
	);
}

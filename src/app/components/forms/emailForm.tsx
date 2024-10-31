import { Button, Input, Switch } from "@nextui-org/react";
import { motion } from "framer-motion";
import * as React from "react";
import { useParallax } from "react-scroll-parallax";

export function EmailForm() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 250, y: 150 }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration: 1 }}
			className=" flex  flex-row shrink-0 gap-5  w-full max-w-[900px] max-md:flex max-md:flex-row max-md:flex-wrap max-md:justify-around max-sm:flex max-sm:flex-col p-5 "
		>
			<div className=" flex relative flex-col  items-start self-stretch w-full h-auto max-sm:flex max-sm:flex-col gap-5">
				<Input type="email" label="Email" />
				<div className="flex relative flex-row shrink-0 justify-around max-sm:justify-start gap-5 items-center">
					<Switch className="h-[20px]  "></Switch>
					<div className="relative shrink-0 h-auto text-sm h-[20px] ">
						I agree to the Privacy Policy
						<br />
					</div>
				</div>
				<Button
					color="default"
					className="bg-focus border border-focus text-black hover:bg-focus  hover:opacity-90 hover:text-focus"
					variant="shadow"
				>
					Subscribe
				</Button>
			</div>
		</motion.div>
	);
}

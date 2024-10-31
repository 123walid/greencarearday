import { motion } from "framer-motion";
import * as React from "react";
import { useParallax } from "react-scroll-parallax";
import { BlogCard } from "./BlogCard";

export function OurBlog() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="box-border flex relative flex-col shrink-0 w-full max-w-[900px] max-sm:p-5 max-sm:text-black max-sm:bg-white min-h-screen "
		>
			<div className="box-border relative shrink-0 mt-5 h-auto text-sm">
				OUR BLOG
			</div>
			<div className="box-border relative shrink-0 pb-8 mt-5 h-auto text-5xl border-b-2 border-b-black max-sm:text-5xl">
				LATEST ARTICLES
			</div>
			<div className="box-border flex relative flex-row flex-wrap shrink-0 gap-2.5 justify-around pb-8 mt-5">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</motion.div>
	);
}

"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
const LocationPage = () => {
	return (
		<div
			id="location"
			className="min-h-screen h-full py-[50px] xl:w-5/6 w-full   p-5  w-full gap-10 bg-background text-foreground flex flex-col  items-center"
		>
			<Breadcrumbs className="place-self-start">
				<BreadcrumbItem>
					<a href={`/`}>Home</a>
				</BreadcrumbItem>
				<BreadcrumbItem>Location</BreadcrumbItem>
			</Breadcrumbs>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="uppercase text-5xl font-extrabold">Location</h1>
			</motion.div>

			<IoIosArrowDown size={50} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:gap-10  w-full h-full   gap-5 my-10">
				<div className="flex flex-col gap-5 lg:col-span-2 max-md:order-2">
					<motion.div
						initial={{ opacity: 0, y: 150 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="w-full shrink-0 border-box overflow-hidden"
					>
						<Image
							loading="eager"
							src={"/images/hosts/img3.jpg"}
							width={1920}
							height={1080}
							alt="Card image background"
							className="w-full h-full  aspect-[4/2] hover:scale-[1.1]   transition-all duration-[1000ms] object-cover"
						/>
					</motion.div>
					<motion.div
						className=" text-2xl lg:text-4xl"
						initial={{ opacity: 0, y: 150 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						The Venue
					</motion.div>

					<motion.div
						className="md:text-sm lg:text-md"
						initial={{ opacity: 0, y: 150 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						The event is hosted at BE-U Behrens Ufer, a Berlin flagship project, where
						currently an urban commercial showcase quarter for climate protection is
						being developed. Located in the heart of the innovation boom-corridor of
						southeast Berlin, BE-U is transforming the visionary heritage of this
						previous industrial complex into a flourishing future-proof life-science
						and technology hub. The consistently sustainable concept, merging science
						and entrepreneurship with education and innovation, focuses on people,
						self-sufficient energy solutions, and comprehensive circular management in
						a human-centered, culture-enhancing space. The event will take place in
						the historical Peter-Behrens Bau, a monument to Berlin&apos;s modern
						industrial culture, where Berlin&apos;s automotive production was
						pioneered and which at one point was Germany&apos;s tallest building. For
						more information, check out{" "}
						<a href="https://be-u.berlin" className="underline text-focus">
							be-u.berlin.
						</a>{" "}
						
					</motion.div>
					<motion.div className="grid grid-cols-2 gap-5">
						<motion.div
							initial={{ opacity: 0, x: -150 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="w-full shrink-0 border-box overflow-hidden"
						>
							<Image
								loading="eager"
								src={"/images/hosts/img2.jpg"}
								width={1920}
								height={1080}
								alt="Card image background"
								className="w-full h-full  aspect-square  hover:scale-[1.1]  transition-all duration-[1000ms] object-cover"
							/>{" "}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 150 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="w-full shrink-0 border-box overflow-hidden"
						>
							<Image
								loading="eager"
								src={"/images/hosts/img6.jpg"}
								width={1920}
								height={1080}
								alt="Card image background"
								className="w-full h-full  aspect-square hover:scale-[1.1]  transition-all duration-[1000ms] object-cover"
							/>
						</motion.div>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: 150 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="bg-foreground text-background p-5 rounded grid grid-cols-2 text-sm   pb-5 border-b-2 border-b-foreground max-sm:order-1  max-md:order-1 h-[200px]"
				>
					<div className="font-extrabold">Name:</div>
					<div className="font-thin">Peter Behren&apos;s Bau</div>{" "}
					<div className="font-extrabold">Completion Date:</div>
					<div className="font-thin">1924</div>
					<div className="font-extrabold">Room:</div>
					<div className="font-thin">Aman-Ullah Saal</div>
					<div className="font-extrabold">Address:</div>
					<div className="font-thin">Ostendstrasse 1-4, 12459 Berlin</div>
					<div className="font-extrabold">Event Day:</div>
					<div className="font-thin">October 25, 2024</div>
					<div className="font-extrabold">Start Time:</div>
					<div className="font-thin">10am CET</div>
				</motion.div>
			</div>
		</div>
	);
};

export default LocationPage;

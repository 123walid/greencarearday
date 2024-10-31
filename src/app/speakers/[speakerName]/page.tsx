"use client";
import Image from "next/image";
import * as React from "react";
import allSpeakers from "../speakers.json";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

function SpeakerPage({ params }: { params: { speakerName: string } }) {
	const speakerName = params.speakerName;
	const existedSpeaker = allSpeakers.speakers.find(
		(speaker) => speaker.name === speakerName
	);
	if (existedSpeaker === undefined) {
		redirect("/");
	}
	return (
		<div className="box-border flex relative h-full  flex-wrap min-h-screen gap-5 relative p-5 md:px-[5dvw] xl:px-[10dvw] w-full bg-background">
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className="box-border flex relative flex-col h-full mt-5 basis-full md:basis-4/6 lg:basis-2/4 gap-5"
			>
				<Breadcrumbs>
					<BreadcrumbItem>
						<a href={`/speakers`}>Speakers</a>
					</BreadcrumbItem>
					<BreadcrumbItem>{speakerName.replaceAll("_", " ")} </BreadcrumbItem>
				</Breadcrumbs>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1 }}
					className="box-border flex relative flex-col  w-full "
				>
					<div className="box-border relative  mt-5 h-auto text-sm text-white">
						SPEAKER
					</div>
					<div className="box-border relative uppercase  mt-5 h-auto text-5xl text-white">
						{existedSpeaker.name.replaceAll("_", " ")}
					</div>
				</motion.div>
				<div className="w-full  h-full p-5 border-1 border-focus rounded-md">
					<Image
						loading="eager"
						width={1920}
						height={1080}
						alt="Card background"
						src={existedSpeaker.image_url}
						className="box-border object-cover aspect-[5/6]  w-full  h-full md:min-h-[650px] md:max-h-screen "
					/>
				</div>
				<div className="space-x-4 mt-4 flex md:justify-start justify-center xl:justify-center  ">
					<a href={existedSpeaker.linkedin} target="_blank">
						<button
							type="button"
							className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14px"
								fill="#333"
								viewBox="0 0 24 24"
							>
								<path
									d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
									data-original="#0077b5"
								/>
							</svg>
						</button>
					</a>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 50, y: 50 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="flex basis-full justify-end   md:absolute md:top-[40dvh]  md:left-0"
			>
				<div className="box-border flex flex-col  gap-y-4 md:mx-5 relative p-10 basis-full  md:basis-7/12   h-auto text-md md:text-sm xl:text-md 2xl:text-lg text-background bg-foreground">
					{existedSpeaker.description.map((each, index) => {
						return (
							<div key={index} className="">
								<span className="text-4xl">{each[0]}</span> {each.substring(1)}{" "}
							</div>
						);
					})}
				</div>
			</motion.div>
		</div>
	);
}
export default SpeakerPage;

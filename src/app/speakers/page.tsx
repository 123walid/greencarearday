"use client";
import { CustomCard } from "../components/CustomCard";
import speakersData from "./speakers.json";
import { motion } from "framer-motion";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
interface speakerType {
	name:string;
	realname: string;
	image_url: string;
	description: string[];
	bio: string;
	linkedin?: string;
}
const SpeakersPage = () => {
	return (
		<div className="basis-full md:basis-11/12 lg:basis-9/12 2xl:basis-8/12  flex flex-col gap-y-12 p-5 transition-all duration-[1000ms]">
			<Breadcrumbs>
				<BreadcrumbItem>
					<a href={`/`}>Home</a>
				</BreadcrumbItem>
				<BreadcrumbItem>Speakers</BreadcrumbItem>
			</Breadcrumbs>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h2 className="text-4xl font-extrabold uppercase text-white uppercase">
					SPEAKERS
				</h2>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 justify-center items-start  text-center p-6 transition-all duration-[1000ms]"
			>
				{speakersData.speakers.map((speaker: speakerType, index) => (
					<CustomCard
						key={index}
						data={{
							title: speaker.realname,
							description: speaker.bio,
							link: "/speakers/" + speaker.name,
							image_url: speaker.image_url,
							linkedin: speaker.linkedin || "",
						}}
					/>
				))}{" "}
			</motion.div>
		</div>
	);
};

export default SpeakersPage;

import { Tab, Tabs } from "@nextui-org/react";
import * as React from "react";
import { CustomEvent } from "./CustomEvent";
import { motion } from "framer-motion";

export function EventsCalendar() {
	return (
		<div
			id="calendar"
			className="w-full bg-foreground text-background flex justify-center items-center p-5"
		>
			<motion.div
				initial={{ opacity: 0, y: 250 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className=" box-border flex relative flex-col shrink-0 py-[120px]  w-full max-w-[1300px] max-sm:p-5   min-h-screen"
			>
				<div className="box-border relative shrink-0 mt-5 h-auto text-sm">
					CALENDAR
				</div>
				<div className="box-border relative shrink-0 pb-8 mt-5 h-auto text-5xl border-b-2 border-b-black max-sm:text-5xl">
					EVENT SCHEDULE
				</div>
				<Tabs key={"underlined"} variant={"underlined"} aria-label="Tabs variants">
					<Tab key="EVENT SCHEDULE" title="EVENT SCHEDULE">
						<div className="overflow-y-auto w-full h-full h-[500px] scrollbar-hide">
							<CustomEvent
								insight="Developing a Welcome Culture"
								content="Attract & empower diverse talent to drive a sustainable future, locally and globally."
								time="10:00"
							/>
							<CustomEvent
								insight="Key Note Lecture: Intelligent Flow"
								content="Decarbonizing companies can unlock human-centric advantages by using existing migration channels and fostering skilled talent pipelines."
								time="11:00"
							/>
							<CustomEvent
								insight="Workshop"
								content="Participants collaboratively discuss individual issues that have arisen in the past when attempting to attract and retain green and global talent."
								time="11:45"
							/>
							<CustomEvent
								insight="Deliciously Energising Lunch & Networking"
								content="Powered by InnoEnergy."
								time="12:30"
							/>
							<CustomEvent
								insight="Pragmatic Management of International Teams"
								content="Practical approaches for product managers to lead diverse international teams, leveraging cultural and language differences as strengths."
								time="13:15"
							/>
							<CustomEvent
								insight="Managing Talent Across Borders"
								content="Strategies and tools for managing teams across borders. Includes an overview of the visa pathways for integrating talent, professional recognition approaches and avoiding time-consuming bottlenecks"
								time="14:00"
							/>
							<CustomEvent
								insight="Green Talent Retention Strategies"
								content="Implementing biodiversity retention strategies that address the unique needs and expectations of international employees, reducing turnover and promoting long-term commitment."
								time="15:00"
							/>
							<CustomEvent
								insight="Sustainability Storytelling Workshop"
								content="Learning how to determine and create story for multiple customer contact points as a means to attract and engage staff."
								time="16:00"
							/>
							<CustomEvent
								insight="Talent Acquisition at the Green Energy Career Day 2025"
								content="Preparing for talent hires at the 2025 Green Energy Career Day"
								time="17:00"
							/>
						</div>
					</Tab>
				</Tabs>
			</motion.div>
		</div>
	);
}

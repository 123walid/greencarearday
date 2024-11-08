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
				className="box-border flex relative flex-col shrink-0 py-[120px] w-full max-w-[1300px] max-sm:p-5 min-h-screen"
			>
				<div className="box-border relative shrink-0 pb-1 mt-1 h-auto text-5xl border-b-2 border-b-black max-sm:text-5xl">
					EVENT SCHEDULE
				</div>

				{/* Directly display the events without Tabs */}
				<div className="overflow-y-auto w-full h-full scrollbar-hide">
					<CustomEvent
						insight="Welcome Note"
						content="Kick off the day with greentech.training’s warm welcome and an introduction to the goals of this event. This opening session will set the stage for how global mobility pathways address the need for skilled, cross-border talent in cleantech."
						time="09:30 - greentech.training"
					/>
					<CustomEvent
						insight="Building the New Energy Talent Pipeline for Europe"
						content="Join InnoEnergy to explore Europe’s rapidly growing need for skilled energy professionals. This talk will introduce the newly launched European Solar Academy and explain how it helps meet the continent’s demand for cleantech talent, providing insights into industry trends and training initiatives."
						time="09:45 - InnoEnergy"
					/>
					<CustomEvent
						insight="New Ways for German Firms to Secure Global Talent"
						content="Learn from legal migration experts at Fragomen about streamlined pathways for hiring international talent in Germany. Whether you’re in HR or product management, this session followed by Q&A will offer practical guidance on leveraging new visa options to bring skilled talent across borders."
						time="10:30 - Fragomen"
					/>
					<CustomEvent
						insight="Cybersecure Ways to Manage Teams Across Borders"
						content="As teams increasingly operate globally, cybersecurity becomes a must. This session will cover essential tools and strategies to keep cross-border team management secure and effective, offering key insights for companies hiring international talent."
						time="11:15 - Jordan Engineers Association"
					/>
					<CustomEvent
						insight="Energizing Lunch & Networking Session"
						content="Courtesy of Event Sponsor InnoEnergy."
						time="12:00"
					/>
					<CustomEvent
						insight="How to Establish a Welcome Culture"
						content="Creating an inclusive workplace culture is critical to attracting and retaining top talent. In this session, and working with individual HR and Product Management teams, Talent Beyond Boundaries will workshop actionable strategies for building a welcoming environment that helps international employees thrive."
						time="13:00 - Talent Beyond Boundaries"
					/>
					<CustomEvent
						insight="Keynote: International Organization for Migration"
						content="IOM will highlight the importance of regular migration pathways that support labor market integration, fostering resilience and sustainability. In response to climate change, IOM advocates for adaptive solutions that equip migrants with necessary skills, aligning workforce growth with environmental objectives in an evolving economy."
						time="14:00 - IOM"
					/>
					<CustomEvent
						insight="Leveraging Humanity’s Interconnectedness"
						content="Internationally renowned expert Rita Trombin will introduce biophilic design and its role in creating workspaces that inspire and retain talent. Learn how incorporating elements of nature fosters well-being and resonates with today’s sustainability-focused professionals."
						time="15:15 - Italian Academy of Biophilia"
					/>
					<CustomEvent
						insight="Storytelling in the Age of Sustainability"
						content="Conclude the day with insights on how to effectively communicate your company’s mission to attract top talent and connect with audiences. This session offers strategies for using authentic storytelling to build a meaningful brand in the cleantech sector."
						time="16:00 - Prof. Dr. Sara Ravan Ramzani and Prof. Dr. Ralf Frank"
					/>
				</div>
			</motion.div>
		</div>
	);
}

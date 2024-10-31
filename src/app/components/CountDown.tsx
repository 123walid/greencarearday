"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
/**
 * Calculates the time remaining until the target date and updates the timeRemaining state.
 *
 * @param {Date} targetDate - The target date to calculate the remaining time from.
 * @return {string} A formatted string representing the remaining time in days, hours, minutes, and seconds.
 */
interface timeRemainingType {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
}
function CountDown({ targetDate }: { targetDate: Date }) {
	const [timeRemaining, setTimeRemaining] = useState<timeRemainingType>({
		days: "00",
		hours: "00",
		minutes: "00",
		seconds: "00",
	});

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeRemaining(calculateTimeRemaining(targetDate));
		}, 1000);
		return () => clearInterval(timer);
	}, [targetDate]);

	function calculateTimeRemaining(targetDate: Date) {
		const currentTime = new Date().getTime();
		const remainingTime = targetDate.getTime() - currentTime;
		const seconds = Math.floor((remainingTime / 1000) % 60)
			.toString()
			.padStart(2, "0");
		const minutes = Math.floor((remainingTime / (1000 * 60)) % 60)
			.toString()
			.padStart(2, "0");
		const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
			.toString()
			.padStart(2, "0");
		const days = Math.floor((remainingTime / (1000 * 60 * 60 * 24)) % 365)
			.toString()
			.padStart(2, "0");

		return { days, hours, minutes, seconds };
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: 1, ease: "easeIn" }}
			data-testid="countdown"
			className=" flex xl:text-[30px] max-sm:w-[100%] sm:w-[60%]  xl:w-[45%] sm:text-[25px] text-[15px] justify-around my-5"
		>
			{/* make col that has number on top and days below splited by line */}
			{Object.entries(timeRemaining).map((value, index) => {
				return (
					<div className="flex justify-evenly w-full" key={index}>
						<div className="flex flex-col items-center justify-around gap-y-[10px] capitalize ">
							<span className="font-bold ">{value[1]}</span>
							<div className="bg-focus h-[4px] w-[60px] "></div>
							<span className="font-bold ">{value[0]}</span>
						</div>
						{index !== 3 && <div className="">:</div>}
					</div>
				);
			})}
		</motion.div>
	);
}

export default React.memo(
	CountDown,
	(prevProps, nextProps) =>
		prevProps.targetDate.getTime() === nextProps.targetDate.getTime()
);

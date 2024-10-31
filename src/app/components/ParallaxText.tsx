"use client";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
	wrap,
} from "framer-motion";
import "./stripes.css";

interface ParallaxProps {
	textToShow: string;
	baseVelocity: number;
	rotationDeg: number;
	textColor: string;
	bgColor: string;
}

export function ParallaxText({
	textToShow,
	textColor,
	bgColor,
	rotationDeg = 0,
	baseVelocity = 100,
}: ParallaxProps) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 100,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	const x = useTransform(baseX, (v) => `${wrap(-20, 20, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div
			className="parallax p-[30px] h-[60px] flex justify-center items-center "
			style={{ background: bgColor, transform: `rotate(${rotationDeg}deg)` }}
		>
			<motion.div className="scroller" style={{ x }}>
				{Array(5)
					.fill(textToShow)
					.map((text, index) => (
						<span key={index} className="mx-4" style={{ color: textColor }}>
							{text}
						</span>
					))}
			</motion.div>
		</div>
	);
}

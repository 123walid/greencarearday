"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import AnimatedCursor from "react-animated-cursor";
import { Keyboard, Mousewheel, Pagination } from "swiper/modules";

import { useState } from "react";

import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";
const EventCarousel = () => {
	// return multicarousel images
	const [showCursor, setShowCursor] = useState(false);

	return (
		<div
			className="w-full  bg-dark xl:p-10"
			onMouseOver={() => setShowCursor(true)}
			onMouseOut={() => setShowCursor(false)}
		>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				keyboard={{ enabled: true }}
				pagination={{
					clickable: true,

					bulletActiveClass: "swiper-pagination-bullet-active",
				}}
				mousewheel={false}
				modules={[Pagination, Keyboard, Mousewheel]}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1,
					},
					1024: {
						slidesPerView: 2,
					},
				}}
				className=" mySwiper flex w-full mb-[60px] w-full justify-start items-center"
			>
				<SwiperSlide>
					<Image
						// rotate image infinitely
						alt="Card background"
						loading="eager"
						width={1920}
						height={1080}
						src="/images/hosts/img1.jpg"
						className="box-border object-cover aspect-[16/9]     hover:scale-[1.1] transition-all duration-[800ms] overflow-hidden  p-2.5  w-full  h-full "
					/>{" "}
				</SwiperSlide>{" "}
				<SwiperSlide>
					<Image
						// rotate image infinitely
						alt="Card background"
						loading="eager"
						width={1920}
						height={1080}
						src="/images/hosts/img6.jpg"
						className="box-border object-cover aspect-[16/9]     hover:scale-[1.1] transition-all duration-[800ms] overflow-hidden  p-2.5  w-full  h-full "
					/>{" "}
				</SwiperSlide>{" "}
				<SwiperSlide>
					<Image
						// rotate image infinitely
						alt="Card background"
						loading="eager"
						width={1920}
						height={1080}
						src="/images/hosts/img7.jpg"
						className="box-border object-cover  aspect-[16/9] hover:scale-[1.1] transition-all duration-[800ms] overflow-hidden  p-2.5  w-full  h-full "
					/>{" "}
				</SwiperSlide>{" "}
				<SwiperSlide>
					<Image
						// rotate image infinitely
						alt="Card background"
						loading="eager"
						width={1920}
						height={1080}
						src="/images/hosts/img3.jpg"
						className="box-border object-cover  aspect-[16/9] hover:scale-[1.1] transition-all duration-[800ms] overflow-hidden  p-2.5  w-full  h-full "
					/>{" "}
				</SwiperSlide>{" "}
			</Swiper>
		</div>
	);
};

export default EventCarousel;

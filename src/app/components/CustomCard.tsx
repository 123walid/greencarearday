"use client";
import Image from "next/image";
import { title } from "process";

export const CustomCard = ({
	data,
}: {
	data: {
		image_url: string;
		title: string;
		description: string;
		link: string;
		linkedin: string;
	};
}) => {
	return (
		<div className="flex flex-col  relative items-center  overflow-hidden transition-all duration-[1000ms]">
			<a href={data.link} className="  transition-all duration-[1000ms]">
				<div className="w-full   shrink-0 border-box overflow-hidden">
					<Image
						loading="eager"
						src={data.image_url}
						width={1920}
						height={1080}
						alt="Card image background"
						className="w-full aspect-[5/6]  h-full hover:scale-[1.1]    transition-all duration-[1000ms] object-cover"
					/>
				</div>
			</a>
			<div className="p-4 text-background bg-foreground w-full flex flex-col items-center justify-around gap-2 h-full">
				<a
					href={data.link}
					className=" capitalize  transition-all duration-[1000ms]"
				>
					<div className="text-md md:text-lg xl:text-xl font-bold hover:text-focus transition-all duration-[300ms] h-[50px]">
						{data.title.replaceAll("_", " ")}
					</div>
					<div className="text-xs  xl:text-sm mt-1 max-w-[300px] h-[50px]">
						{data.description}
					</div>
				</a>
				<div className="space-x-2 mt-4">
					{" "}
					<a
						href={data.linkedin}
						target="_blank"
						className="w-7 h-7 hover:-translate-y-2 transition-all duration-[300ms] inline-flex items-center justify-center rounded-full border-none outline-none  bg-background hover:bg-focus "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14px"
							fill="#fff"
							viewBox="0 0 24 24"
						>
							<path
								d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
								data-original="#0077b5"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

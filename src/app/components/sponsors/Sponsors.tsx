import Image from "next/image";

const Sponsors = () => {
	return (
		<div
			id="sponsors"
			className="bg-[#f8efef]  w-full  text-background py-5 md:text-2xl text:xl"
		>
			<div className="max-w-7xl mx-auto flex flex-wrap justify-around px-4 mt-[60px]">
				<p className="uppercase w-full text-center  font-semibold uppercase   tracking-wider">
					Powered By
				</p>
				<div className="flex items-center flex-wrap justify-around basis-full  gap-y-5 min-h-[130px]">
					<a
						className="flex items-center justify-center  hover:opacity-100 hover:scale-[1.2] transition-all duration-[800ms]  opacity-50 basis-full sm:basis-6/12  lg:basis-2/12 h-[80px] "
						href="#"
						target="_blank"
					>
						<Image
							// rotate image infinitely
							alt="Card background"
							loading="eager"
							width={750}
							height={750}
							src="/images/sponsors/tipberlin.png"
							className="box-border overflow-hidden    w-full  h-full p-2 z-[10] object-contain"
						/>{" "}
					</a>
					<a
						className="flex items-center justify-center  hover:opacity-100 hover:scale-[1.2] transition-all duration-[800ms]  opacity-50 basis-full sm:basis-6/12  lg:basis-2/12 h-[80px] "
						href="#"
						target="_blank"
					>
						<Image
							// rotate image infinitely
							alt="Card background"
							loading="eager"
							width={750}
							height={750}
							src="/images/sponsors/TheBerliner.png"
							className="box-border overflow-hidden    w-full  h-full p-2 z-[10] object-contain"
						/>{" "}
					</a>
					<a
						className="flex items-center justify-center  hover:opacity-100 hover:scale-[1.2] transition-all duration-[800ms]  opacity-50 basis-full sm:basis-6/12  lg:basis-3/12 h-[100px] "
						href="#"
						target="_blank"
					>
						<Image
							// rotate image infinitely
							alt="Card background"
							loading="eager"
							width={750}
							height={750}
							src="/images/sponsors/greenTech.png"
							className="box-border overflow-hidden    w-full  h-full p-2 z-[10] object-contain"
						/>{" "}
					</a>
					<a
						className="flex items-center justify-center  hover:opacity-100 hover:scale-[1.2] transition-all duration-[800ms]  opacity-50 basis-full sm:basis-6/12 lg:basis-2/12  h-[150px]   pb-5 "
						href="#"
						target="_blank"
					>
						<Image
							// rotate image infinitely
							alt="Card background"
							loading="eager"
							width={750}
							height={750}
							src="/images/sponsors/greenTechFestival.png"
							className="box-border overflow-hidden    w-full h-full p-2 z-[10] object-contain "
						/>{" "}
					</a>
				</div>
			</div>
			{/* <div className="h-[60px] bg-background"></div> */}
			<div className="max-w-7xl mx-auto flex flex-wrap justify-around    px-4">
				<p className="uppercase w-full   text-center  font-semibold uppercase  tracking-wider">
					Global Sponsors
				</p>
				<div className="flex items-center justify-around basis-full h-[150px]">
					<a
						className="flex items-center justify-center  hover:opacity-100 hover:scale-[1.2] transition-all duration-[800ms]  opacity-50 basis-full basis-full sm:basis-6/12 h-full"
						href="#"
						target="_blank"
					>
						<Image
							// rotate image infinitely
							alt="Card background"
							loading="eager"
							width={750}
							height={750}
							src="/images/sponsors/Co-Funded-By-the-EU.png"
							className="box-border overflow-hidden    w-full  h-full p-2 z-[10] object-contain"
						/>{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;

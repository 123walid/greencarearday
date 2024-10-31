// SponsorshipPackage.tsx
import { FaGlobeEurope, FaMedal, FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdTrendingUp } from "react-icons/io";
import { MdSwitchRight, MdWorkspacePremium } from "react-icons/md";

export interface SponsorshipPackageType {
	name: string;
	price: string;
	details: string[];
	media_coverage?: {
		[key: string]: string[];
	};
}

export const SponsorshipPackage = ({
	data,
}: {
	data: SponsorshipPackageType;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className=" flex justify-center items-center p-3 w-full h-full"
		>
			<div className="border-focus w-full h-full  shadow-focus box-border flex relative flex-col  justify-between  items-center p-5 rounded-xl border-2 border-solid  min-h-[800px]">
				<div className="box-border flex relative flex-col  gap-3 justify-start items-center">
					<div className="p-2 border-focus border-1 rounded-full">
						{data.name === "PREMIUM" && (
							<MdWorkspacePremium size={24} className="text-focus" />
						)}
						{data.name === "GLOBAL" && (
							<FaGlobeEurope size={24} className="text-focus" />
						)}
					</div>
					<div className="box-border relative  w-full h-auto text-2xl text-center">
						<span>{data.name}</span>
					</div>
					<div className="text-focus box-border flex relative flex-row  gap-1.5 justify-center items-end w-full">
						<div className="box-border relative  h-auto text-center">
							<span className="text-4xl">{data.price}</span>
						</div>
					</div>
					{data.details.map((detail, idx) => (
						<div
							key={idx}
							className="box-border flex relative flex-row  gap-2.5 justify-around items-start w-full"
						>
							<FaRegCheckCircle size={20} />
							<p className="box-border relative w-full h-auto text-left text-xs">
								{detail}
							</p>
						</div>
					))}
				</div>
				{data.media_coverage && (
					<div className="box-border flex flex-row max-sm:flex-col justify-center max-sm:items-center gap-2 gap-y-5 items-start w-full mt-4">
						{Object.entries(data.media_coverage).map(([key, values], idx) => (
							<div
								key={idx}
								className="border p-2 rounded-lg shadow-sm md:basis-1/2 h-full  min-h-[250px]"
							>
								<h4 className="font-bold text-sm mb-2 text-focus">
									{key.replace("_", " ")}
								</h4>
								{values.map((value, index) => (
									<div
										key={idx}
										className="box-border flex relative flex-row  gap-2.5  justify-around items-start w-full"
									>
										<FaRegCheckCircle size={20} />
										<p className="box-border relative w-full h-auto text-left text-xs">
											{value}
										</p>
									</div>
								))}
							</div>
						))}
					</div>
				)}
				<a href={`/register?pkg=${data.name}`} className="w-[200px] min-h-[50px]">
					<button className="uppercase hover:bg-focus w-full hover:text-background transition-all duration-[700ms] bg-transparent border-2 border-focus box-border relative  px-6 py-4 mt-5 w-full text-center rounded-2xl appearance-none cursor-pointer bg-[black] text-[white]">
						Select
					</button>
				</a>
			</div>
		</motion.div>
	);
};

export default SponsorshipPackage;

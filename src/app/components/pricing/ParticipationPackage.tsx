// component
import { FaMedal, FaRegCheckCircle } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { motion } from "framer-motion";
import { HiInformationCircle } from "react-icons/hi";
import { MdGroupWork, MdSwitchRight } from "react-icons/md";
import packages from "./participationPricing.json";
export interface PackageType {
	name: string;
	price: number;
	discounted_price?: number;
	details: string[];
}
export const ParticipationPackage = ({ data }: { data: PackageType }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="  flex justify-center items-center p-3 min-h-[650px] max-h-[700px]  w-full "
		>
			<div className="border-focus  shadow-focus box-border flex relative flex-col shrink-0 justify-between items-center p-5 rounded-xl border-2 border-solid  w-full h-full ">
				<div className="box-border flex relative flex-col shrink-0 gap-3 justify-start items-center">
					<div className="p-2 border-focus border-1 rounded-full">
						{data.name == "DEVELOPMENT" && (
							<IoMdTrendingUp size={24} className="text-focus" />
						)}
						{data.name == "TRANSITION" && (
							<MdSwitchRight size={24} className="text-focus" />
						)}
						{data.name == "INTEGRATED" && (
							<MdGroupWork size={24} className="text-focus" />
						)}
						{data.name == "LEADER" && <FaMedal size={24} className="text-focus" />}
					</div>
					<div className="box-border relative shrink-0 w-full h-auto text-2xl text-center">
						<span className="">{data.name}</span>
					</div>
					<div className="text-focus box-border flex relative flex-row  gap-1.5 justify-center items-end w-full">
						<div className="box-border relative  h-auto text-center">
							{data.discounted_price ? (
								<>
									<span className="text-4xl "> {data.discounted_price}</span>
									<small className="line-through decoration-2 text-md">
										{" "}
										{data.price}
									</small>
								</>
							) : (
								<span className="text-4xl"> {data.price}</span>
							)}
						</div>
					</div>
					{data.details.map((detail: any, idx: any) => (
						<div
							key={idx}
							className="box-border flex relative flex-row w-full  gap-2.5 justify-around items-start "
						>
							<FaRegCheckCircle size={20} />
							<p className="box-border relative w-full h-auto  text-left text-sm md:text-xs">
								{detail}
							</p>
						</div>
					))}
				</div>
				<a href={`/register?pkg=${data.name}`} className="w-[200px] min-h-[50px]">
					<button className="uppercase hover:bg-focus w-full hover:text-background transition-all duration-[700ms] bg-transparent border-2 border-focus box-border relative shrink-0 px-6 py-4 mt-5 w-full text-center rounded-2xl appearance-none cursor-pointer bg-[black]  text-[white]">
						Select
					</button>
				</a>
			</div>
		</motion.div>
	);
};

export default ParticipationPackage;

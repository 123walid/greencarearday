"use client";
import { Button } from "@nextui-org/react";
import { Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
	HiChartPie,
	HiClipboard,
	HiCollection,
	HiInformationCircle,
	HiLogin,
	HiPencil,
	HiSearch,
	HiShoppingBag,
	HiUsers,
	HiMenu,
	HiHome,
	HiMail,
} from "react-icons/hi";
import { motion, Variants } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { CgArrowTopRight } from "react-icons/cg";
export function CustomDrawer() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);
	const itemVariants = (delay: number = 0.2): Variants => ({
		open: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
		closed: { opacity: 0, x: -100, transition: { duration: delay } },
	});

	return (
		<>
			<div className="flex min-min-h-screen items-center justify-center">
				<Button onClick={() => setIsOpen(true)} className="bg-transparent ">
					<HiMenu size={50} color="#ffffff" />
				</Button>
			</div>
			<Drawer
				open={isOpen}
				onClose={handleClose}
				position="right"
				className={"min-h-[150dvh] bg-background w-full lg:w-[30%] "}
				style={{
					position: "fixed",
					top: 0,
					right: 0,
				}}
			>
				<motion.nav
					animate={isOpen ? "open" : "closed"}
					transition={{ ease: "easeOut", duration: 0.7 }}
					variants={{
						open: {
							opacity: 1,
							x: 0,
							transition: {
								type: "spring",
								bounce: 0,
								duration: 0.7,
								delayChildren: 0.5,
								staggerChildren: 0.05,
							},
						},
						closed: { opacity: 0, y: "-300%" },
					}}
					className=" relative w-full h-full fixed top-0 right-0 z-50 p-5 flex flex-col bg-background  gap-y-[60px]  "
				>
					<h1 className=" text-start text-focus mb-5 py-5 border-b-0 max-w-[50%]  text-3xl  ">
						{" "}
						GREEN ENERGY CAREER DAY{" "}
					</h1>
					<IoMdClose
						size={30}
						color="#ffffff"
						className="absolute top-0 right-0 mx-5 cursor-pointer"
						onClick={handleClose}
					/>
					<motion.div
						variants={{
							open: {
								clipPath: "inset(0% 0% 0% 0% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.7,
									delayChildren: 0.3,
									staggerChildren: 0.05,
								},
							},
							closed: {
								clipPath: "inset(10% 50% 90% 50% round 10px)",
								transition: {
									type: "spring",
									bounce: 0,
									duration: 0.3,
								},
							},
						}}
						style={{ height: "100%" }}
					>
						<div className="flex flex-col gap-5 uppercase w-full h-full text-2xl max-md:text-xl">
							<motion.div
								variants={itemVariants()}
								className="flex justify-between text-foreground hover:text-focus transition-all duration-300 ease-in hover:border-b-1 w-[60%] hover:w-full hover:border-focus p-2"
							>
								<a href="/#calendar">KICKOFF PROGRAM</a>
								<CgArrowTopRight size={30} />
							</motion.div>
							<motion.div
								variants={itemVariants()}
								className="flex justify-between text-foreground hover:text-focus transition-all duration-300 ease-in hover:border-b-1 w-[60%] hover:w-full hover:border-focus p-2"
							>
								<a href="/speakers">SPEAKER BIOS</a>
								<CgArrowTopRight size={30} />
							</motion.div>

							<motion.div
								variants={itemVariants()}
								className="flex justify-between text-foreground hover:text-focus transition-all duration-300 ease-in hover:border-b-1 w-[60%] hover:w-full hover:border-focus p-2"
							>
								<a href="/location">Location</a>
								<CgArrowTopRight size={30} />
							</motion.div>

							<motion.div
								variants={itemVariants()}
								className="flex justify-between text-foreground hover:text-focus transition-all duration-300 ease-in hover:border-b-1 w-[60%] hover:w-full hover:border-focus p-2"
							>
								<a href="/register">Apply</a>
								<CgArrowTopRight size={30} />
							</motion.div>
						</div>
					</motion.div>
				</motion.nav>
			</Drawer>
		</>
	);
}

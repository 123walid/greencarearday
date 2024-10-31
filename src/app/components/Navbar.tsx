"use client";
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { DarkThemeToggle } from "flowbite-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { CustomDrawer } from "./Drawer";
import { ParallaxText } from "./ParallaxText";
import Image from "next/image";
export const CustomNavbar = () => {
	return (
		<>
			<ParallaxText
				rotationDeg={0}
				bgColor="#9AF8B3"
				textColor="#000000"
				baseVelocity={-1}
				textToShow="INTELLIGENT FLOW - LINKING A WORLD OF TALENT TO GERMANY’S ENERGY TRANSITION"
			></ParallaxText>{" "}
			<Navbar shouldHideOnScroll className="w-screen bg-navbar ">
				<NavbarBrand>
					<a href="/">
						<h1 className=" font-bold text-brand sm:text-3xl max-sm:text-[14px]">
							GREEN ENERGY CAREER DAY{" "}
						</h1>
					</a>
				</NavbarBrand>

				<NavbarContent justify="end" className="w-full">
					<NavbarItem className="">
						<CustomDrawer />
					</NavbarItem>
					{/* <NavbarItem>
						<ThemeSwitcher />
					</NavbarItem> */}
				</NavbarContent>
			</Navbar>
		</>
	);
};

// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;

	return (
		<div>
			{theme === "dark-muzicon" ? (
				<Button
					onClick={() => setTheme("light-muzicon")}
					className=" text-foreground bg-transparent p-1 rounded-full"
				>
					<HiSun size={30} />
				</Button>
			) : (
				<Button
					onClick={() => setTheme("dark-muzicon")}
					className=" text-background bg-transparent p-1 rounded-full"
				>
					<HiMoon size={30} />
				</Button>
			)}
		</div>
	);
}

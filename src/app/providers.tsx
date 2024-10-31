// app/providers.tsx
"use client";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: React.ReactNode }) {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setTheme("dark-muzicon");
	});
	return (
		<NextUIProvider>
			<NextThemesProvider
				forcedTheme="dark-muzicon"
				attribute="class"
				defaultTheme="dark-muzicon"
				themes={["dark-muzicon"]}
			>
				{children}
				<ToastContainer limit={3} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}

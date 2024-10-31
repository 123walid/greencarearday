import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeModeScript } from "flowbite-react";
import { CustomNavbar } from "./components/Navbar";
import { OurFooter } from "./components/OurFooter";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	openGraph: {
		title: "Green Energy Career Day",
		description: "Join the premier event for a cooler Earth.",
		images: {
			url: "https://green-energy-career-day.com/_next/image?url=%2Fimages%2FLogo_without_text.png&w=800&q=800",
			alt: "Green Energy Career Day",
			type: "image/png",
		},

		type: "website",
		url: "https://green-energy-career-day.com/",
	},
	twitter: {
		title: "Green Energy Career Day",
		description: "Join the premier event for a cooler Earth.",
		images: {
			url: "https://green-energy-career-day.com/_next/image?url=%2Fimages%2FLogo_without_text.png&w=800&q=800",
			alt: "Green Energy Career Day",
			type: "image/png",
		},
		creator: "@green_energy_career_day",
		site: "@green_energy_career_day",
	},

	icons: {
		shortcut: {
			url: "https://green-energy-career-day.com/favicon.png",
			href: "https://green-energy-career-day.com/favicon.png",
		},
		icon: {
			url: "https://green-energy-career-day.com/favicon.png",
			href: "https://green-energy-career-day.com/favicon.png",
		},
		apple: {
			url: "https://green-energy-career-day.com/favicon.png",
			href: "https://green-energy-career-day.com/favicon.png",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ThemeModeScript />
			</head>
			<body
				className={
					"norwester-font overflow-x-clip scroll-smooth tracking-wider bg-background text-foreground"
				}
			>
				<Providers>
					<Suspense>
						<div className="w-full h-full  bg-background text-foreground ">
							<CustomNavbar />
							<div className="w-full flex justify-around bg-background min-h-screen py-[10dvh] ">
								{children}
							</div>
							<OurFooter />
						</div>
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}

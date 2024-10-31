import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
import flowbite from "flowbite-react/tailwind";
import { navbar } from "@nextui-org/react";
const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		flowbite.content(),
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				"dark-muzicon": {
					extend: "dark", // <- inherit default values from dark theme
					colors: {
						primary: "#17171b",
						secondary: "#FFFFFF",
						background: "#17171b",
						foreground: "#FFFFFF", // Keep consistent foreground color
						focus: "#E6B358", // Keep consistent foreground color
						brand: "#E6B358",
						navbar: "#17171b",
						purple: "#c798fb",
						light: "#FFFFFF",
						dark: {
							100: "#2C2F32",
							DEFAULT: "#17171b",
						},
					},
				},
				"light-muzicon": {
					extend: "light", // <- inherit default values from dark theme
					colors: {
						foreground: "#17171b",
						background: "#FFFFFF", // Keep consistent foreground color
						focus: "#E6B358", // Keep consistent foreground color
						brand: "#E6B358",
						navbar: "#17171b",
						purple: "#c798fb",
						dark: {
							100: "#2C2F32",
							DEFAULT: "#17171b",
						},
						light: "#FFFFFF",
					},
				},
				// "light-palette": {
				// 	extend: "light", // <- inherit default values from dark theme
				// 	colors: {
				// 		foreground: "#14211C",
				// 		background: "#FFFFFF", // Keep consistent foreground color
				// 		focus: "#E6B358", // Keep consistent foreground color
				// 		brand: "#E6B358",
				// 		navbar: "#14211C",
				// 		purple: "#c798fb",
				// 		dark: {
				// 			100: "#2C2F32",
				// 			DEFAULT: "#17171b",
				// 		},
				// 		light: "#FFFFFF",
				// 	},
				// },
				// "dark-palette": {
				// 	extend: "dark", // <- inherit default values from dark theme
				// 	colors: {
				// 		background: "#14211C",
				// 		foreground: "#FFFFFF", // Keep consistent foreground color
				// 		focus: "#E6B358", // Keep consistent foreground color
				// 		brand: "#E6B358",
				// 		navbar: "#14211C",
				// 		purple: "#c798fb",
				// 		dark: {
				// 			100: "#2C2F32",
				// 			DEFAULT: "#17171b",
				// 		},
				// 		light: "#FFFFFF",
				// 	},
				// },
			},
		}),
		flowbite.plugin(),
	],
};
export default config;

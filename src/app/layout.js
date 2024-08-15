import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Smooth Scroller",
	description: "It is the practice project for the smooth scroller.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SmoothScroller>{children}</SmoothScroller>
			</body>
		</html>
	);
}

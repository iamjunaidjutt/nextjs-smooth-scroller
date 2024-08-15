"use client";

import { ReactLenis } from "lenis/react";

const SmoothScroller = ({ children }) => {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
			}}
		>
			{children}
		</ReactLenis>
	);
};

export default SmoothScroller;

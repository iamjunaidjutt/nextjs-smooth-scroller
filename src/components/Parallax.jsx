"use client";

import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Parallax = ({ className, children, speed = 1, id = "parallax" }) => {
	const trigger = useRef(null);
	const target = useRef(null);
	const timeline = useRef(null);

	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const y = windowWidth * speed * 0.1;

		const setY = gsap.quickSetter(target.current, "y", "px");

		timeline.current = gsap.timeline({
			scrollTrigger: {
				id: id,
				trigger: trigger.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				onUpdate: (e) => {
					setY(y * e.progress);
				},
			},
		});

		return () => {
			timeline.current.kill();
		};
	}, [id, speed, windowWidth]);

	return (
		<div ref={trigger} className={className}>
			<div ref={target}>{children}</div>
		</div>
	);
};

export default Parallax;

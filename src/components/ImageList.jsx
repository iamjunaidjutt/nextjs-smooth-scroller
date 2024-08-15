"use client";

import Image from "next/image";
import Parallax from "./Parallax";
import { useLenis } from "lenis/react";

const ImageList = () => {
	const lenis = useLenis(({ scroll }) => {
		console.log(scroll);
	});

	return (
		<>
			<button
				className="bg-white text-black capitalize p-4 font-semibold text-xl mt-16 hover:bg-white/90"
				onClick={() =>
					lenis.scrollTo("#last-image", {
						lerp: 0.01,
					})
				}
			>
				Scroll to End
			</button>
			<Parallax speed={1.3} className={"self-start"}>
				<Image
					src={"https://picsum.photos/600/400?random=1"}
					width={600}
					height={400}
					alt="Random image"
				/>
			</Parallax>

			<Image
				src={"https://picsum.photos/600/400?random=3"}
				width={600}
				height={400}
				alt="Random image"
			/>
			<Parallax speed={-2} className={"self-end overflow-hidden"}>
				<Image
					src={"https://picsum.photos/600/400?random=2"}
					width={600}
					height={400}
					alt="Random image"
				/>
			</Parallax>
			<Image
				src={"https://picsum.photos/600/400?random=4"}
				width={600}
				height={400}
				alt="Random image"
			/>
			<Parallax speed={-1.3} className={"self-start"}>
				<Image
					src={"https://picsum.photos/600/400?random=5"}
					width={600}
					height={400}
					alt="Random image"
				/>
			</Parallax>
			<Parallax speed={-5} className={"self-start"}>
				<Image
					src={"https://picsum.photos/600/400?random=6"}
					width={600}
					height={400}
					alt="Random image"
				/>
			</Parallax>
			<Image
				src={"https://picsum.photos/600/400?random=7"}
				width={600}
				height={400}
				alt="Random image"
			/>
			<Parallax speed={2} className={"self-end"}>
				<Image
					src={"https://picsum.photos/600/400?random=8"}
					width={600}
					height={400}
					alt="Random image"
				/>
			</Parallax>
			<Parallax speed={-1.3} className={"self-center"}>
				<Image
					src={"https://picsum.photos/600/400?random=9"}
					width={600}
					height={400}
					alt="Random image"
				/>
			</Parallax>
			<Parallax speed={-2} className={"self-start"}>
				<Image
					src={"https://picsum.photos/600/400?random=10"}
					width={600}
					height={400}
					alt="Random image"
					id="last-image"
				/>
			</Parallax>
		</>
	);
};

export default ImageList;

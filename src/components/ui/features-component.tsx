import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { PrivacyCard } from "../blocks/privacy-card";
import { Mate } from "next/font/google";

export default function FeaturesSectionBlock() {
	const features = [
		{
			title: "Supercharged with AI",
			description:
				"ClearCut is powered by the latest AI technology, aiming to provide the best experience for users from various domains.",
			skeleton: <SkeletonTwo />,
			className:
				"col-span-1 lg:col-span-4 font-bold border-b lg:border-r dark:border-neutral-800 lg:border-r font-bold dark:border-neutral-800"
		},
		{
			title: "Privacy First",
			description:
				"Your data is yours. We don't store any of your data. Period.",
			skeleton: <SkeletonOne />,
			className: "border-b col-span-1 font-bold lg:col-span-2 dark:border-neutral-800",
		},
		// {
		// 	title: "Batch Processing",
		// 	description:
		// 		"Save time by processing multiple images at once. ClearCut allows you to upload and remove backgrounds from several images simultaneously, making it ideal for businesses and creatives with high workloads.",
		// 	skeleton: <SkeletonThree />,
		// 	className:
		// 		"col-span-1 lg:col-span-3 lg:border-r font-bold dark:border-neutral-800",
		// },
		// {
		// title: "Fast and Accurate Results:",
		// description:
		// 	"Experience lightning-fast background removal with ClearCut’s precision AI. Get high-quality, clean results in seconds, perfect for e-commerce, photography, and content creation.",
		// skeleton: <SkeletonFour />,
		// className: "col-span-1 lg:col-span-3 border-b lg:border-none",
		// },
	];
	return (
		<div className="relative max-w-7xl mx-auto">
			<div className="px-8">
				<Link href="/#features">
					<h4 id="features" className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black dark:text-white">
						Why Choose ClearCut?
					</h4>
				</Link>
				<p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
					From Image generation to video generation, Everything AI has APIs for
					literally everything. It can even create this website copy for you.
				</p>
			</div>

			<div className="relative ">
				<div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
					{features.map((feature) => (
						<FeatureCard key={feature.title} className={feature.className}>
							<FeatureTitle>{feature.title}</FeatureTitle>
							<FeatureDescription>{feature.description}</FeatureDescription>
							<div className=" h-full w-full">{feature.skeleton}</div>
						</FeatureCard>
					))}
				</div>
			</div>
		</div>
	);
}

const FeatureCard = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
			{children}
		</div>
	);
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
			{children}
		</p>
	);
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
	return (
		<p
			className={cn(
				"text-sm md:text-base  max-w-4xl text-left mx-auto",
				"text-neutral-500 text-center font-normal dark:text-neutral-300",
				"text-left mx-0 md:text-sm my-2"
			)}
		>
			{children}
		</p>
	);
};

export const SkeletonOne = () => {
	return (
		<div className="relative flex px-2 gap-10 h-full">
			<div className="w-full mx-auto bg-violet-950/20 shadow-2xl group h-full">
				<div className="flex flex-1 w-full h-full flex-col space-y-0  ">
					<div className="h-80 w-full object-cover object-left-top rounded-sm z-40">
						<PrivacyCard />
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
			<div className="absolute top-0 z-40 inset-x-0 h-72 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
		</div>
	);
};

export const SkeletonThree = () => {
	return (
		<Link
			href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
			target="__blank"
			className="relative flex gap-10 group/image"
		>
			<div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
				<div className="flex flex-1 w-full flex-col space-y-2  relative">
					{/* TODO */}
					{/* <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " /> */}
					<Image
						src="/assets/batch-processing.png"
						alt="A screenshot from the window with multiple images selected"
						width={300}
						height={300}
						className="h-auto w-auto object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
					/>
				</div>
			</div>
		</Link>
	);
};

export const SkeletonTwo = () => {
	const images = [
		"/assets/bee-or-cat.png",
		"/assets/croc.png",
		"/assets/goku-drip.png",
		"/assets/miku.png",
		"/assets/2b.png",
		"/assets/miku-glass.png"
	];

	const imageVariants = {
		whileHover: {
			scale: 1.1,
			rotate: 0,
			zIndex: 100,
		},
		whileTap: {
			scale: 1.1,
			rotate: 0,
			zIndex: 100,
		},
	};

	const [rotations, setRotations] = React.useState<number[]>([]);

	useEffect(() => {
		const randomRotations = images.map(() => Math.random() * 20 - 10);
		setRotations(randomRotations);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="relative flex flex-col items-start p-8 gap-10 overflow-hidden">
			{/* TODO */}
			<div className="flex flex-row -ml-20">
				{images.map((image, idx) => (
					<motion.div
						variants={imageVariants}
						key={"images-first" + idx}
						style={{
							rotate: rotations[idx],
						}}
						whileHover="whileHover"
						whileTap="whileTap"
						className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
					>
						<Image
							src={image}
							alt="bali images"
							width="500"
							height="500"
							className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
						/>
					</motion.div>
				))}
			</div>
			{
				// <div className="flex flex-row">
				// 	{images.map((image, idx) => (
				// 		<motion.div
				// 			key={"images-second" + idx}
				// 			style={{
				// 				rotate: Math.random() * 20 - 10,
				// 			}}
				// 			variants={imageVariants}
				// 			whileHover="whileHover"
				// 			whileTap="whileTap"
				// 			className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
				// 		>
				// 			<Image
				// 				src={image}
				// 				alt="bali images"
				// 				width="500"
				// 				height="500"
				// 				className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
				// 			/>
				// 		</motion.div>
				// 	))}
				// </div>
			}
			<div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
			<div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
		</div>
	);
};

export const SkeletonFour = () => {
	return (
		<div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
			<Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
		</div>
	);
};

export const Globe = ({ className }: { className?: string }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let phi = 0;

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				// longitude latitude
				{ location: [37.7595, -122.4367], size: 0.03 },
				{ location: [40.7128, -74.006], size: 0.1 },
			],
			onRender: (state) => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				state.phi = phi;
				phi += 0.01;
			},
		});

		return () => {
			globe.destroy();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
			className={className}
		/>
	);
};

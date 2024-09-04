import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function Image3dCard() {
	const SIZE = 300;
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 group/card relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl flex items-center justify-center border">
				{/* Lower image with hover blur effect */}
				<CardItem translateZ="100" className="absolute flex items-center justify-center transition duration-300 ease-in-out group-hover/card:blur-sm">
					<Image src="/assets/christopher-campbell-rDEOVtE7vOs-unsplash_square.jpg" alt="lower image" width={SIZE} height={SIZE} />
				</CardItem>

				{/* Upper image */}
				<CardItem translateZ="150" className="absolute flex items-center justify-center z-10">
					<Image src="/assets/removed_christopher-campbell-rDEOVtE7vOs-unsplash.png" alt="upper image" width={SIZE} height={SIZE} />
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}

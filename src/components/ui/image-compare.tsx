import { Compare } from "@/components/ui/compare";

export function ImageCompare() {
	return (
		<div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
			<Compare
				firstImage="/assets/christopher-campbell-rDEOVtE7vOs-unsplash.webp"
				secondImage="/assets/removed-bg_christopher-campbell-rDEOVtE7vOs-unsplash.webp"
				firstImageClassName="object-cover object-center"
				secondImageClassname="object-cover object-center"
				className="h-[250px] w-[200px] md:h-[350px] md:w-[350px]"
				slideMode="hover"
				autoplay
				autoplayDuration={2000}
			/>
		</div>
	);
}

import { Navbar, Hero } from "@/components";
export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center">
				<Navbar />
				<Hero />
			</div>
		</>
	);
}

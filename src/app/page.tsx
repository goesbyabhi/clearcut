import { Navbar, Hero, Features } from "@/components";
export default function Home() {
	return (
		<>
			<div className="flex bg-black flex-col items-center">
				<Hero />
				<Features />
			</div>
		</>
	);
}

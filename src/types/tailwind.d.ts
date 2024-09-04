// Custom declaration of types for the flattenColorPalette module. Why is the web dev ecosystem so messy lol
declare module "tailwindcss/lib/util/flattenColorPalette" {
	export default function flattenColorPalette(
		pallette: Record<string, string>,
	): Record<string, string>;
}

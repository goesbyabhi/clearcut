import { FileUploadBlock } from "@/components";
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "ClearCut // Upload",
	description: "Upload your images to ClearCut",
};

export default function Upload() {
	// TODO: Implement upload page
	// make it allow you to select or drag and drop MULTIPLE files.
	// So far it only accepts one file at a time
	return (
		<>
			<div className="flex bg-black h-screen items-center justify-center">
				<FileUploadBlock />
			</div>
		</>
	)
}


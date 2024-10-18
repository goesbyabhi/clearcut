import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file"); // Ensure we are looking for 'file'

  if (!file) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  const formDataForRembg = new FormData();
  formDataForRembg.append("file", file as Blob); // Use 'file' as the field name

  try {
    const response = await fetch("http://localhost:7000/api/remove", {
      method: "POST",
      body: formDataForRembg,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from rembg:", errorText);
      return NextResponse.json(
        { error: "Failed to process image" },
        { status: response.status },
      );
    }

    const resultBlob = await response.blob();
    return new Response(resultBlob, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 },
    );
  }
}

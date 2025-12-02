import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
    try {
        // Ensure Cloudinary is configured
        if (
            !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
            !process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ||
            !process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        ) {
            console.error("Cloudinary environment variables are not set");
            return NextResponse.json(
                {
                    error: "File upload service is not configured",
                    details:
                        "Missing Cloudinary configuration. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
                },
                { status: 500 }
            );
        }

        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Convert File to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Determine resource type based on file extension
        const fileExt = file.name.split(".").pop()?.toLowerCase();
        const isImage = ["jpg", "jpeg", "png", "gif", "webp"].includes(fileExt || "");
        const resourceType = isImage ? "image" : "raw";

        // Upload to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: resourceType,
                    folder: "rezon-projects",
                    use_filename: true,
                    unique_filename: true,
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            uploadStream.end(buffer);
        });

        return NextResponse.json({
            success: true,
            url: (uploadResult as any).secure_url,
            publicId: (uploadResult as any).public_id,
        });
    } catch (error: any) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json(
            { error: "Failed to upload file", details: error.message },
            { status: 500 }
        );
    }
}


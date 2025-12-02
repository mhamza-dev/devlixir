import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { sendProjectSubmissionEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("body", body);
        const { projectName, roleType, techStacks, documentUrls, email, phone, description } = body;

        // Validate required fields
        if (!projectName || !roleType || !techStacks || techStacks.length === 0 || !email || !phone || !description) {
            return NextResponse.json(
                { error: "Missing required fields: projectName, roleType, techStacks, email, phone, description" },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const collection = db.collection("project_submissions");

        const projectData = {
            projectName,
            roleType,
            techStacks,
            documentUrls: documentUrls || [],
            email,
            phone,
            description,
            status: "pending",
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const result = await collection.insertOne(projectData);

        // Fire-and-forget email notification; don't fail the API if email fails
        try {
            await sendProjectSubmissionEmails({
                projectName,
                roleType,
                techStacks,
                documentUrls: projectData.documentUrls,
                email,
                phone,
                description,
            });
        } catch (emailError) {
            console.error("Error sending project submission emails:", emailError);
        }

        return NextResponse.json(
            {
                success: true,
                message: "Project submitted successfully",
                id: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error submitting project:", error);
        return NextResponse.json(
            { error: "Failed to submit project", details: error.message },
            { status: 500 }
        );
    }
}


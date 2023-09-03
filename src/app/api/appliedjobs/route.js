import appliedJobs from "@/models/appliedJobs";
import connectDB from "@/mongoDB/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const appliedJob = await req.json();
    await connectDB();
    await appliedJobs.create(appliedJob);
    return NextResponse.json({ message: "job created", status: 201 });
  } catch (error) {
    console.log(error);
  }
}

export const GET = async () => {
  await connectDB();
  const jobs = await appliedJobs.find();
  return NextResponse.json(jobs);
};

import appliedJobs from "@/models/appliedJobs";
import connectDB from "@/mongoDB/connectDB";
import { NextResponse } from "next/server";

export const GET = async (_req, { params }) => {
  await connectDB();
  const jobs = await appliedJobs.findById(params.id);
  return NextResponse.json(jobs);
};

import appliedJobs from "@/models/appliedJobs";
import connectDB from "@/mongoDB/connectDB";
import { NextResponse } from "next/server";

export const GET = async (_req, { params }) => {
  await connectDB();
  const jobs = await appliedJobs.findById(params.id);
  return NextResponse.json(jobs);
};

export const DELETE = async (_req, { params }) => {
  await connectDB();
  const jobs = await appliedJobs.findOneAndDelete(params.id);
  return NextResponse.json(jobs);
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { companyName, role, companyLogoURL, notes, status } =
    await request.json();

  await connectDB();
  await appliedJobs.findByIdAndUpdate(id, {
    companyName,
    role,
    companyLogoURL,
    notes,
    status,
  });
  return NextResponse.json({ message: "updated" });
};

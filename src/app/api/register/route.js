// import connectDB from "@/mongoDB/connectDB";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { User } from "@/models/appliedJobs";

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();
//     const hashPass = await bcrypt.hash(password, 10);
//     await connectDB();
//     await User.create({ name, email, password: hashPass });
//     return NextResponse.json({ message: "user created" });
//   } catch (error) {
//     console.log(error);
//   }
// }

// import { User } from "@/models/appliedJobs";
// import connectDB from "@/mongoDB/connectDB";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { email } = await req.json();
//     const user = await User.findOne({ email });
//     console.log("user", user);
//     return NextResponse.json({ user });
//   } catch (error) {
//     console.log(error);
//   }
// }

import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessull");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const projects = await prisma.project.findMany();
    return NextResponse.json({ message: "Success", projects }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, description, targetFixed ,deadline, achieved    } = await req.json();
    await main();
    const project = await prisma.project.create({ data: { title, description, targetFixed ,deadline, achieved } });
    return NextResponse.json({ message: "Success", project }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
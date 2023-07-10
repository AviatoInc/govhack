import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/department/")[1];
    await main();
    const project = await prisma.project.findFirst({ where: { id } });
    if (!project)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/department/")[1];
    const {title, description, targetFixed ,deadline, achieved  } = await req.json();
    await main();
    const project = await prisma.project.update({
      data: { title, description, targetFixed ,deadline, achieved  },
      where: { id },
    });
    return NextResponse.json({ message: "Success", project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/department/")[1];
    await main();
    const project = await prisma.project.delete({ where: { id } });
    return NextResponse.json({ message: "Success", project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
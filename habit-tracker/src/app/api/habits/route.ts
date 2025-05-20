import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const habit = await prisma.habit.create({ data });
  return NextResponse.json(habit);
}

export async function GET() {
  const habits = await prisma.habit.findMany({ include: { logs: true } });
  return NextResponse.json(habits);
}

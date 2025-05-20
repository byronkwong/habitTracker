import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const habitId = params.id;
  const log = await prisma.log.create({
    data: {
      habitId,
      date: new Date(), // You can let user pick date in future
    },
  });
  return NextResponse.json(log);
}

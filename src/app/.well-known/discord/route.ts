import { NextResponse } from 'next/server';

export async function GET() {
  const verificationContent = 'dh=2241fc1bf3fc267faa2c1fb0b4d690a4ab000e63';

  return new NextResponse(verificationContent, {
    headers: { 'Content-Type': 'text/plain' },
  });
}

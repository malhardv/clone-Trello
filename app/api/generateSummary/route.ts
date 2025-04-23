import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Return a default message when OpenAI is not configured
  return NextResponse.json({
    content: "Welcome to Trello Clone! You can start adding tasks to your board. Have a productive day!"
  });
}

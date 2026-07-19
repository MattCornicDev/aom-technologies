import { NextResponse } from "next/server";

export async function GET() {
  const placeId = "CeG6P7bNc3QEEAE";
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    const text = await res.text();
    let data: Record<string, any> = {};

    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }
    }

    if (!res.ok || data?.status !== "OK") {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(data?.result?.reviews || [], { status: 200 });
  } catch (error) {
    console.error("Google reviews fetch failed:", error);
    return NextResponse.json([], { status: 200 });
  }
}

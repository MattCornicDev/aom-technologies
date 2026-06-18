import { NextResponse } from "next/server";

export async function GET() {
  const placeId = "CeG6P7bNc3QEEAE"; // Ton ID Google
  const apiKey = process.env.GOOGLE_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
  );

  const data = await res.json();

  return NextResponse.json(data.result.reviews || []);
}

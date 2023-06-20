import { sanity } from '@muze/lib/sanity-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await sanity.fetch(`*[_type == "manga"]{
    _id,
    title_english,
    title_japanese,
    "front_cover_english_url": front_cover_english.asset->url,
    "front_cover_japanese_url": front_cover_japanese.asset->url,
    "back_cover_english_url": back_cover_english.asset->url,
    "back_cover_japanese_url": back_cover_japanese.asset->url,
    owned,
    volume,
    total_volumes,
    is_omnibus,
    have_read,
  }`);
  return NextResponse.json(data);
}

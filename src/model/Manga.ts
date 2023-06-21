import { Artist } from "./Artist";
import { Publisher } from "./Publisher";

export interface Manga {
  _id: string;
  title_english?: string;
  title_japanese?: string;
  front_cover_english_url?: string;
  back_cover_english_url?: string;
  front_cover_japanese_url?: string;
  back_cover_japanese_url?: string;
  owned?: boolean;
  volume?: number;
  total_volumes?: number;
  is_omnibus?: boolean;
  have_read?: boolean;
  mangaka?: Artist;
  author?: Artist;
  publisher?: Publisher;
}

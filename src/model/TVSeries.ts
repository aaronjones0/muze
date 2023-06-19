export interface TVSeries {
  /**
   * PK
   */
  _id: string;
  created_at?: Date;
  short_title?: string;
  full_title?: string;
  tag_line?: string;
  /**
   * FK Medium
   */
  medium: number;
  primaryImage?: string;
  image_primary_url?: string;
}
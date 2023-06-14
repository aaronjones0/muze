export interface TVSeries {
  /**
   * PK
   */
  _id: string;
  created_at?: Date;
  short_title?: string;
  full_title?: string;
  tagline?: string;
  /**
   * FK Medium
   */
  medium: number;
}
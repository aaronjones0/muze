export interface Book {
  _createdAt: Date;
  _id: string;
  authors?: any[];
  cover_image?: any;
  coverImageUrl?: string;
  full_title?: string;
  isbn?: string;
  library: any;
  owned?: boolean;
  publisher?: string;
  short_title?: string;
  subtitle?: string;
  volume?: number;
  _updatedAt: Date;
}

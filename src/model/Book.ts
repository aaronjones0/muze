export interface Book {
  _createdAt?: Date;
  _id: string;
  authors?: any[];
  cover_image?: any;
  cover_image_url?: string;
  edition?: string;
  full_title?: string;
  isbn?: string;
  library: any;
  notes?: string;
  owned?: boolean;
  publisher?: string;
  short_title?: string;
  subtitle?: string;
  volume?: number;
  _updatedAt?: Date;
}

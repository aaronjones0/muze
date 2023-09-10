export interface User {
  _id: string;
  full_name: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_image: {
    _type: string;
    _ref: string;
  };
  profile_image_url: string;
  profile_image_blob?: Blob;
}

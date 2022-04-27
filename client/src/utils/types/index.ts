export type User = {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  facebook_link: string;
  instagram_link: string;
  location: {
    city: string;
    createdAt: string;
    id: number;
    updatedAt: string;
  };
  locationId: number;
  services: [];
};

export type Works = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
}[];
export type Reviews = [
  {
    id: number;
    title: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
  }
];
export interface Request {
  data: {
    user: User;
    reviews: object;
    works: Works;
    totalReviews: number;
  };
}
export interface AllWorks {
  1: [];
}
export interface OnWork {
  id: number;
  title: string;
  content: string;
  image: string;
  userId: number;
}

export interface OneService {
  id: number;
  name: string;
  mainServiceId: number;
  createdAt: string;
  updatedAt: string;
}
export interface UserInfoCardProps {
  userInfo: any
}
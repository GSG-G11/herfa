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

export type TopTenReviews = {
  rate: number;
  content: string;
  userId: number;
};
export interface locationObject {
  city:string,
  id: number,
}
export interface serviceObject {
  name:string,
  id: number,
}
export interface HomeRequest {
  data: {
    location: locationObject[];
    services: serviceObject[];
    topTenReviews: TopTenReviews[];
  };
}
export interface OneUserType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp: string;
  description: string;
  image: string;
  totalReview: number;
  subServices: {}[];
}
export type Context = {
  data: {
    location: locationObject[];
    services: serviceObject[];
    topTenReviews: TopTenReviews[];
  },
  checks: {
    error: string;
    errorExist: Boolean,
    isLoading: Boolean,
  },
}
export type LoggedUser = {
  providerID: number;
  providerName: string;
  sub: string;
}
export type Location = {
  id: number;
  city: string;
}
export type MainService = {
  id: number;
  name: string;
}
export type UserData = {
  id: number;
  avgRating: number;
  description: string;
  email: string;
  facebook_link: string;
  instagram_link: string;
  image: string;
  first_name: string;
  last_name: string;
  phone: string;
  whatsapp: string;
  location: Location;
  main_service: MainService;
  services: [];
}
export type SearchResponse = {
  count: number;
  data: UserData[];
  msg: string;
}
export type Event = {
  target: { value: string };
}
export type ServiceSearch = {
  serviceSearch: number;
  locationSearch: number;
}
export interface FilterSearchProps {
  setUsers: (value: UserData[]) => void;
  setSearchError: (value: string) => void;
  setIsLoading: (value: boolean) => void;
  setResultCount: (value: number) => void;
}

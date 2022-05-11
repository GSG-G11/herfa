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

export type UserResponse = {
    user: User;
    reviews: any;
    works: Works;
    totalReviews: number;
    count: number;
}
export interface ProfileInfoResponse {
  data: any;
  msg: string;
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
export type LoginFormType = {
  email: string,
  password:string,
}
export type NavBarProps = {
  language: string;
  setLanguage: (lang: string) => void;
};
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
  setPage: (value: number) => void;
  page: number;
}
export type HomeReviewProps = {
  data: TopTenReviews[];
}
export type WorkListProps = {
  worksData: OnWork[];
  page: number;
  handlePageChange: (page: number) => void;
  resultCount: number;
  isAuth: {isAuth: boolean};
  isLoading: boolean;
  error: string;
};
export type ProfileDataProps = {
  setPage: (page: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  successCB: (
    user:User,
    works: Works, reviews:TopTenReviews[], totalReviews:number, count: number) => void;
  failedCB: (msg: string) => void;
  id: number;
}
export type WorksProps = {
  setWorkLoading: (value: boolean) => void;
  successCB: (data: any) => void;
  failedCB: (msg: string) => void;
  id : number;
  page : number;
}

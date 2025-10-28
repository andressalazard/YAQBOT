/*************************************************
 * authentication
 *************************************************/
export interface NewLogin {
  email: string;
  password: string;
}

/*************************************************
 * user
 *************************************************/
export interface User {
  username: string;
  email: string;
  role: 'ADMIN' | 'USER';
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface UpdatedUser {
  username?: string;
  email?: string;
}

/*************************************************
 * profile
 *************************************************/
export type userGender = 'MALE' | 'FEMALE' | 'OTHER';
export type gardernerLevels = 'AMATEUR' | 'INTERMEDIATE' | 'PRO';

interface SocialLink {
  name: string;
  url: string;
  username?: string;
}

export interface Profile {
  fullname: string;
  phone: string;
  region: string;
  address: string;
  birthday: string;
  gender: userGender;
  avatar: string;
  bio: string;
  gardernerLevel: gardernerLevels;
  socialLinks: SocialLink[];
}

export interface NewProfile {
  fullname?: string | '';
  phone?: string | '';
  region?: string | '';
  address?: string | '';
  birthday?: string | '';
  gender?: userGender | 'MALE';
  avatar?: string | '';
  bio?: string | '';
  gardernerLevel?: 'AMATEUR';
  socialLinks?: SocialLink[] | [];
}

export interface UpdatedProfile {
  fullname?: string;
  phone?: string;
  region?: string;
  address?: string;
  birthday?: string;
  gender?: userGender;
  avatar?: string;
  bio?: string;
  gardernerLevel?: gardernerLevels;
  socialLinks?: SocialLink[];
}

/***************************************************
 * Products
 ***************************************************/
export type ProductCategory = 'PLANT' | 'FERTILIZER' | 'FLOWERPOT' | 'TOOL' | 'OTHER';
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: ProductCategory;
  image: string[];
}

/****************************************************
 * Payloads
 ***************************************************/
export interface ValidPayload {
  token: string;
  userid: string;
}

export interface PayloadForgotPassword {
  message: string;
  type: string;
}

export interface PayloadVerifyResetToken {
  success: boolean;
  resetToken: string;
  expiresIn: string;
}

/**************************************************
 * slices
 **************************************************/
export interface AuthState {
  token: string | null;
  userid: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface UserState {
  isloading: boolean;
  user: User | null;
  profile: Profile | null;
}

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
 * Plant
 *****************************************************/
type wateringMode = 'HIGH' | 'MODERATE' | 'LOW';
type lightType = 'FULL_SUNLIGHT' | 'PARTIAL_LIGHT' | 'INDIRECT_LIGHT' | 'DAPPLED_LIGHT' | 'SHADE';
type weather =
  | 'CLEAR'
  | 'CLOUDY'
  | 'PARTIALLY_CLOUDLY'
  | 'OVERCAST'
  | 'GLOOMY'
  | 'BRIGHT'
  | 'DARK'
  | 'FOGGY'
  | 'MISTY'
  | 'HAZY'
  | 'DAMP';
export interface Plant {
  id: string;
  name: string;
  type: string;
  maxHeight: number;
  wateringMode: wateringMode;
  wateringFrequency: number;
  weather: weather[];
  light: lightType;
  specialCares: string;
}

export interface catalogPlant {
  id: string;
  name: string;
  image: string[];
  plant: {
    type: string;
    weather: weather[];
  };
}

export interface retrievedPlant {
  id: string;
  nickname: string;
  status: string;
  plant: {
    id: string;
    name: string;
    type: string;
    weather: weather[];
  };
}

export interface NewOwnership {
  userid: string;
  plant: {
    id: string;
    nickname: string;
  };
}

export interface PlantDetails {
  nickname: string;
  status: string;
  createdAt: string;
  notes?: string[];
  userPhotos?: any;
  location?: string;
  remindMeFlag: boolean;
  plant: {
    name: string;
    type: string;
    weather: weather[];
    light: string;
    product: {
      image: string[];
    };
  };
}
export interface ForecastInfo {
  date: string;
  time: string;
  temperature: number;
  humidity: number;
  weather: string;
  description: string;
  wind: number;
  rain: number;
  icon: string;
}

export interface WeatherData {
  date: string;
  time: string;
  city: string;
  country: string;
  weather: string;
  description: string;
  temperature: number;
  humidity: number;
  wind: number;
  icon: string;
}

export interface WeatherForecast {
  city: string;
  country: string;
  forecast: ForecastInfo[];
}

/****************************************************
 * Payloads
 ***************************************************/
export interface ValidPayload {
  token: string;
  userid: string;
}

export interface PayloadLoginAdmin {
  token: string;
  userid: string;
  userType: string;
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

export interface AuthAdminState {
  token: string | null;
  userid: string | null;
  userType: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface UserState {
  isloading: boolean;
  user: User | null;
  profile: Profile | null;
}

/*****************************************
 * general purpose
 *****************************************/
export interface descriptionType {
  label: string;
  value: string;
  isblocked?: boolean;
  submitChange?: (value: string) => void;
}

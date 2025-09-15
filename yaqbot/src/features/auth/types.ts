interface User {
  id: string;
  username: string;
  email: string;
}

interface UserProfile {
  fullname: string;
  phone: string;
  region: string;
  address: string;
  birthday: string;
  gender: string;
  avatar: string;
  bio: string;
  gardernerLevel: string;
  socialLinks: {
    name: string;
    url: string;
    username?: string;
  }[];
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  profile: UserProfile | null;
}

interface ValidPayload {
  token: string;
  user: User;
}

export { User, UserProfile, AuthState, ValidPayload };

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
}

interface ValidPayload {
  token: string;
  user: User;
}

export { User, AuthState, ValidPayload };

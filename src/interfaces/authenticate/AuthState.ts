export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    isAdmin: boolean | undefined;
  }
  

  interface User {
    id: string;
    userName: string;
    email: string;
    isAdmin: boolean;
  }
import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
}

interface AuthActions {
  setAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuth = create<AuthState & AuthActions>((set, get) => ({
  isAuthenticated: false,

  setAuthenticated: (isAuthenticated) => {
    set({ isAuthenticated });
  },
}));

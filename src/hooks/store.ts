import { create } from "zustand";

interface NavbarState {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isNavbarOpen: false,
  toggleNavbar: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
}));

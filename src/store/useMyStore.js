import { create } from "zustand";

const useMyStore = create((set, get) => ({
  darkMode: true,
  currentPage: "",
  setCurrentPage: (page) => {
    set({ currentPage: page });
  },

  setDarkMode: () => {
    set({ darkMode: !get().darkMode });
  },
}));

export default useMyStore;

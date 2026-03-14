import { create } from "zustand";

const useMyStore = create((set, get) => ({
  darkMode: true,
  setDarkMode: () => {
    set({ darkMode: !get().darkMode });
  },
}));

export default useMyStore;

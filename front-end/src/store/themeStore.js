import { create } from "zustand";

const useThemeStore = create((set) => ({
  currentTheme: "light",
  changeTheme: (state) => {
    // console.log(state);
    set({ currentTheme: state });
  },
}));

export default useThemeStore;

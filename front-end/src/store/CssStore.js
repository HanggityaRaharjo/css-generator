import { create } from "zustand";

const useStyleStore = create((set) => ({
  bears: 10,
  // Sidebar
  sidebarBackground: "#000000",
  sidebarTextColor: "#000000",
  sidebarLinkTextColor: "#000000",
  sidebarHoverLinkBackground: "#000000",

  // Button
  buttonPrimary: "#000000",
  buttonSecondary: "#000000",
  buttonPrimaryOutline: "#000000",
  buttonSecondaryOutline: "#000000",

  // Navbar
  navbarBackground: "#000000",
  navbarTextColor: "#000000",
  navbarTextHover: "#000000",

  //Card
  cardBackground: "#000000",
  cardTextColorPrimary: "#000000",
  cardTextColorSecondary: "#000000",

  // BreadCrumbs
  breadcrumbBackground: "#000000",
  breadcrumbTextTitle: "#000000",
  breadcrumbTextColor: "#000000",

  // Table
  tableTextColor: "#000000",
  tableHeadBackground: "#000000",
  tableRowBackgroundOdd: "#000000",
  tableRowBackgroundEven: "#000000",

  // ToggleSwitch
  switchToggleOn: "#000000",
  switchToggleBackgroundOn: "#000000",
  switchToggleOff: "#000000",
  switchToggleBackgroundOff: "#000000",

  // Label
  labelTextColor: "#000000",

  // Input
  inputTextColor: "#000000",
  inputBackgroundColor: "#000000",
  inputBorderRadius: "#000000",

  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useStyleStore;

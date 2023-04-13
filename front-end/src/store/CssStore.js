import { create } from "zustand";

const useStyleStore = create((set) => ({
  bears: 10,
  // Sidebar
  sidebarBackground: "",
  sidebarTextColor: "",
  sidebarLinkBackgroundActive: "",
  sidebarBorderRadius: "0%",
  sidebarBorderWidth: "",
  sidebarBorderStyle: "",
  sidebarBorderColor: "",

  sidebarLinkTextColor: "",
  sidebarLinkBackgroundActive: "",
  sidebarLinkBorderRadius: "",
  sidebarLinkBorderWidth: "",
  sidebarLinkBorderStyle: "",
  sidebarLinkBorderColor: "",

  // BreadCrumbs
  breadcrumbBackground: "",
  breadcrumbTextTitle: "",
  breadcrumbTextColor: "",
  breadcrumbTextActive: "",
  breadcrumbBorderRadius: "",
  breadcrumbBorderWidth: "",
  breadcrumbBorderStyle: "",
  breadcrumbBorderColor: "",

  //Card
  cardBackground: "",
  cardTextColorPrimary: "",
  cardBorderRadius: "",
  cardBorderWidth: "",
  cardBorderStyle: "",
  cardBorderColor: "",

  // Navbar
  navbarBackground: "",
  navbarTextColor: "",
  navbarTextHover: "",

  navbarBorderRadius: "",
  navbarBorderWidth: "",
  navbarBorderStyle: "",
  navbarBorderColor: "",

  // Card Content
  cardContentBackground: "",
  cardContentColor: "",
  cardContentBorderRadius: "",
  cardContentBorderWidth: "",
  cardContentBorderStyle: "",
  cardContentBorderColor: "",

  // Table
  tableTextColor: "",
  tableBackgroundFilter: "",
  tableFilterColor: "",
  tableBackgroundSearch: "",
  tableSearchColor: "",
  tableBackgroundButton: "",
  tableHeader: "",
  tableRowOdd: "",
  tableRowEven: "",

  // Form Card
  cardFormBackground: "",
  cardFormColor: "",

  // Input
  inputLabelColor: "",
  inputTextColor: "",
  inputTextBackground: "",
  // select
  selectLabelColor: "",
  selectTextColor: "",
  selectTextBackground: "",

  // Text area
  textAreaBackground: "",
  textAreaColor: "",

  // ---------------------------- Monitoring -------------------------------
  cardGaugeBackground: "",
  cardGaugeValueColor: "",
  cardBackgroundProgress: "",

  // Monitor
  cardMonitorBackground: "",
  cardMonitorColor: "",

  // ---------------------------- Monitoring -------------------------------
  changeStyle: (state) => {
    console.log(state);
    const property = state.property;
    set({ [property]: state.value });
  },
}));

export default useStyleStore;

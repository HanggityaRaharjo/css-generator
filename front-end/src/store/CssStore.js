import { create } from "zustand";

const useStyleStore = create((set) => ({
  // Sidebar
  sidebarBackground: "",
  sidebarTextColor: "",
  sidebarLinkBackgroundActive: "",
  sidebarBorderRadius: "",
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

  cardGaugeBackground: "",
  cardGaugeValueColor: "",
  cardBackgroundProgress: "",

  // Monitor
  cardMonitorBackground: "",
  cardMonitorColor: "",
  monitorBorderBackground: "",
  valueColor: "",

  // Button
  // Primary
  btnPrimaryBackground: "",
  btnPrimaryTextColor: "",
  btnPrimaryBorderRadius: "",
  btnPrimaryOutline: "",
  btnPrimaryOutlineText: "",
  btnPrimaryHoverBackground: "",
  btnPrimaryHoverText: "",
  btnPrimaryActiveBackground: "",
  btnPrimaryActiveText: "",
  // Secondary
  btnSecondaryBackground: "",
  btnSecondaryTextColor: "",
  btnSecondaryBorderRadius: "",
  btnSecondaryOutline: "",
  btnSecondaryOutlineText: "",
  btnSecondaryHoverBackground: "",
  btnSecondaryHoverText: "",
  btnSecondaryActiveBackground: "",
  btnSecondaryActiveText: "",
  popUpCardBackground: "",
  popUpSuccessBackground: "",
  popUpSuccessColor: "",
  popUpFailedBackground: "",
  popUpFailedColor: "",
  popUpTextColor: "",
  popUpBtnBackground: "",
  popUpBtnTextColor: "",

  // ---------------------------- Login -------------------------------
  cardLoginBackground: "",
  cardLoginTextColor: "",
  cardLoginHeading: "",
  loginLabelColor: "",
  loginInputBackground: "",
  loginInputTextColor: "",
  loginButtonBackground: "",
  loginButtonTextColor: "",
  // ---------------------------- Login -------------------------------
  changeStyle: (state) => {
    const property = state.property;
    set({ [property]: state.value });
  },
}));

export default useStyleStore;

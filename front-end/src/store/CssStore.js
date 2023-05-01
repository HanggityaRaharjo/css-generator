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

  // ---------------------------------------------- Table ----------------------------------
  tableTextColor: "",
  tableBackgroundFilter: "",
  tableFilterColor: "",
  tableBackgroundSearch: "",
  tableSearchColor: "",
  tableBackgroundButton: "",
  tableBackgroundButtonHover: "",
  tableHeader: "",
  tableRowOdd: "",
  tableRowEven: "",

  // ---------------------------------------------Button--------------------------------
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
  // Success
  btnSuccessBackground: "",
  btnSuccessTextColor: "",
  btnSuccessBorderRadius: "",
  btnSuccessOutline: "",
  btnSuccessOutlineText: "",
  btnSuccessHoverBackground: "",
  btnSuccessHoverText: "",
  btnSuccessActiveBackground: "",
  btnSuccessActiveText: "",
  // Error
  btnErrorBackground: "",
  btnErrorTextColor: "",
  btnErrorBorderRadius: "",
  btnErrorOutline: "",
  btnErrorOutlineText: "",
  btnErrorHoverBackground: "",
  btnErrorHoverText: "",
  btnErrorActiveBackground: "",
  btnErrorActiveText: "",
  // Warning
  btnWarningBackground: "",
  btnWarningTextColor: "",
  btnWarningBorderRadius: "",
  btnWarningOutline: "",
  btnWarningOutlineText: "",
  btnWarningHoverBackground: "",
  btnWarningHoverText: "",
  btnWarningActiveBackground: "",
  btnWarningActiveText: "",
  // Info
  btnInfoBackground: "",
  btnInfoTextColor: "",
  btnInfoBorderRadius: "",
  btnInfoOutline: "",
  btnInfoOutlineText: "",
  btnInfoHoverBackground: "",
  btnInfoHoverText: "",
  btnInfoActiveBackground: "",
  btnInfoActiveText: "",

  // ---------------------------------------------Button--------------------------------
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

  // Selected
  headerBackgroundColor: "",
  headerBackgroundImage: "",
  headerBackgroundGradient: "",
  headerBorderWidth: "",
  headerBorderStyle: "",
  headerBorderColor: "",
  headerShadow: "",
  headerColor: "",
  headerFilter: "",
  headerFontFamily: "",
  headerFontSize: "",
  headerHeight: "",
  // End Selected
  // Selected
  sidebarBackgroundColor: "",
  sidebarBackgroundImage: "",
  sidebarBackgroundGradient: "",
  sidebarBorderWidth: "",
  sidebarBorderStyle: "",
  sidebarBorderColor: "",
  sidebarShadowThick: "",
  sidebarShadowGradient: "",
  sidebarColor: "",
  sidebarFilter: "",
  sidebarFontFamily: "",
  sidebarFontSize: "",

  // Content
  contentBackgroundColor: "",
  contentBackgroundImage: "",
  contentBackgroundGradient: "",
  contentBorderWidth: "",
  contentBorderStyle: "",
  contentBorderColor: "",
  contentShadowThick: "",
  contentShadowGradient: "",
  contentColor: "",
  contentFilter: "",
  contentFontFamily: "",
  contentFontSize: "",
  // End Content
  // --------------------------------------------------- Modal ------------------------------------------
  modalHeaderBackgroundColor: "",
  modalHeaderBorderColor: "",
  modalBodyBorderColor: "",
  modalBodyBorderColor: "",
  modalFooterBackgroundColor: "",
  modalFooterBorderColor: "",

  // Color Theme
  colorPrimary: "#007bff",
  colorSecondary: "#6c757d",
  colorSuccess: "#28a745",
  colorWarning: "#ffc107",
  colorInfo: "#17a2b8",
  colorDanger: "#dc3545",

  // End Selected
  changeStyle: (state) => {
    const property = state.property;
    set({ [property]: state.value });
  },
}));

export default useStyleStore;

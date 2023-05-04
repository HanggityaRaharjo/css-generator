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
  // breadcrumbBackground: "",
  // breadcrumbTextTitle: "",
  // breadcrumbTextColor: "",
  // breadcrumbTextActive: "",
  // breadcrumbBorderRadius: "",
  // breadcrumbBorderWidth: "",
  // breadcrumbBorderStyle: "",
  // breadcrumbBorderColor: "",

  //Card
  cardBackground: "",
  cardTextColorPrimary: "",

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

  // Header
  headerBackgroundColor: "",
  headerBackgroundImage: "",
  headerBackgroundGradient: "",
  headerBorderWidth: "",
  headerBorderStyle: "",
  headerBorderColor: "",
  headerShadow: "",
  headerColor: "",
  headerFilterBlur: "",
  headerFontFamily: "",
  headerFontSize: "",
  headerBorderRadius: "",
  headerHeight: "",
  // End Header

  // Sidebar
  sidebarBackgroundColor: "",
  sidebarBackgroundImage: "",
  sidebarBackgroundGradient: "",
  sidebarBorderWidth: "",
  sidebarBorderStyle: "",
  sidebarBorderColor: "",
  sidebarShadowThick: "",
  sidebarShadowGradient: "",
  sidebarColor: "",
  sidebarFilterBlur: "",
  sidebarFontFamily: "",
  sidebarFontSize: "",
  sidebarBorderRadius: "",
  // End Sidebar

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
  contentFilterBlur: "",
  contentFontFamily: "",
  contentFontSize: "",
  contentBorderRadius: "",
  // End Content
  // Selected
  footerBackgroundColor: "",
  footerBackgroundImage: "",
  footerBackgroundGradient: "",
  footerBorderWidth: "",
  footerBorderStyle: "",
  footerBorderColor: "",
  footerShadow: "",
  footerColor: "",
  footerFilterBlur: "",
  footerFontFamily: "",
  footerFontSize: "",
  footerBorderRadius: "",
  footerHeight: "",
  // End Selected
  // --------------------------------------------------- Modal ------------------------------------------
  // Modal Header
  modalHeaderBackgroundColor: "",
  modalHeaderBackgroundImage: "",
  modalHeaderBackgroundGradient: "",
  modalHeaderBorderWidth: "",
  modalHeaderBorderStyle: "",
  modalHeaderBorderColor: "",
  modalHeaderShadow: "",
  modalHeaderColor: "",
  modalHeaderFilterBlur: "",
  modalHeaderFontFamily: "",
  modalHeaderFontSize: "",
  modalHeaderBorderRadius: "",
  modalHeaderHeight: "",
  // End Modal Header
  // Modal Body
  modalBodyBackgroundColor: "",
  modalBodyBackgroundImage: "",
  modalBodyBackgroundGradient: "",
  modalBodyBorderWidth: "",
  modalBodyBorderStyle: "",
  modalBodyBorderColor: "",
  modalBodyShadow: "",
  modalBodyColor: "",
  modalBodyFilterBlur: "",
  modalBodyFontFamily: "",
  modalBodyFontSize: "",
  modalBodyBorderRadius: "",
  modalBodyHeight: "",
  // End Modal Body
  // Modal Footer
  modalFooterBackgroundColor: "",
  modalFooterBackgroundImage: "",
  modalFooterBackgroundGradient: "",
  modalFooterBorderWidth: "",
  modalFooterBorderStyle: "",
  modalFooterBorderColor: "",
  modalFooterShadow: "",
  modalFooterColor: "",
  modalFooterFilterBlur: "",
  modalFooterFontFamily: "",
  modalFooterFontSize: "",
  modalFooterBorderRadius: "",
  modalFooterHeight: "",
  // End Modal Footer

  // End Modal

  // ----------------------------------------- Card ------------------------------------------
  // Card Header
  cardHeaderBackgroundColor: "",
  cardHeaderBackgroundImage: "",
  cardHeaderBackgroundGradient: "",
  cardHeaderBorderWidth: "",
  cardHeaderBorderStyle: "",
  cardHeaderBorderColor: "",
  cardHeaderShadow: "",
  cardHeaderColor: "",
  cardHeaderFilterBlur: "",
  cardHeaderFontFamily: "",
  cardHeaderFontSize: "",
  cardHeaderBorderRadius: "",
  cardHeaderHeight: "",
  // Card Content
  cardContentBackgroundColor: "",
  cardContentBackgroundImage: "",
  cardContentBackgroundGradient: "",
  cardContentBorderWidth: "",
  cardContentBorderStyle: "",
  cardContentBorderColor: "",
  cardContentShadow: "",
  cardContentColor: "",
  cardContentFilterBlur: "",
  cardContentFontFamily: "",
  cardContentFontSize: "",
  cardContentBorderRadius: "",
  cardContentHeight: "",
  // Card Footer
  cardFooterBackgroundColor: "",
  cardFooterBackgroundImage: "",
  cardFooterBackgroundGradient: "",
  cardFooterBorderWidth: "",
  cardFooterBorderStyle: "",
  cardFooterBorderColor: "",
  cardFooterShadow: "",
  cardFooterColor: "",
  cardFooterFilterBlur: "",
  cardFooterFontFamily: "",
  cardFooterFontSize: "",
  cardFooterBorderRadius: "",
  cardFooterHeight: "",

  cardBorderRadius: "",
  // ----------------------------------------- End Card ------------------------------------------
  // ----------------------------------------- Breadcrumbs ---------------------------------------
  // Breadcrumbs
  breadcrumbsBackgroundColor: "",
  breadcrumbsBackgroundImage: "",
  breadcrumbsBackgroundGradient: "",
  breadcrumbsBorderWidth: "",
  breadcrumbsBorderStyle: "",
  breadcrumbsBorderColor: "",
  breadcrumbsShadow: "",
  breadcrumbsColor: "",
  breadcrumbsFilterBlur: "",
  breadcrumbsFontFamily: "",
  breadcrumbsFontSize: "",
  breadcrumbsBorderRadius: "",
  breadcrumbsHeight: "",

  // Breadcrumbs item
  breadcrumbsItemColor: "",
  breadcrumbsItemDividerColor: "",
  breadcrumbsItemPaddingLeft: "",
  // Breadcrumbs item active
  breadcrumbsItemActiveColor: "",

  // ----------------------------------------- End Breadcrumbs -----------------------------------
  // ----------------------------------------- Form ----------------------------------------------
  // Label
  formLabelColor: "",
  formLabelFontSize: "",
  formLabelFontFamily: "",
  formLabelFontWeight: "",
  formLabelFontStyle: "",
  // End Label
  // Input
  formInputBackgroundColor: "",
  formInputBackgroundImage: "",
  formInputBackgroundGradient: "",
  formInputBorderWidth: "",
  formInputBorderStyle: "",
  formInputBorderColor: "",
  formInputShadow: "",
  formInputColor: "",
  formInputFilterBlur: "",
  formInputFontFamily: "",
  formInputFontSize: "",
  formInputBorderRadius: "",
  formInputHeight: "",
  // End Input
  // ----------------------------------------- End Form ------------------------------------------
  // Color Theme
  colorPrimary: "#007bff",
  colorSecondary: "#6c757d",
  colorSuccess: "#28a745",
  colorWarning: "#ffc107",
  colorInfo: "#17a2b8",
  colorDanger: "#dc3545",
  // ----------------------------------------- Toast ------------------------------------------
  // toast Header
  toastHeaderBackgroundColor: "",
  toastHeaderBackgroundImage: "",
  toastHeaderBackgroundGradient: "",
  toastHeaderBorderWidth: "",
  toastHeaderBorderStyle: "",
  toastHeaderBorderColor: "",
  toastHeaderShadow: "",
  toastHeaderColor: "",
  toastHeaderFilterBlur: "",
  toastHeaderFontFamily: "",
  toastHeaderFontSize: "",
  toastHeaderBorderRadius: "",
  toastHeaderHeight: "",
  // toast Content
  toastContentBackgroundColor: "",
  toastContentBackgroundImage: "",
  toastContentBackgroundGradient: "",
  toastContentBorderWidth: "",
  toastContentBorderStyle: "",
  toastContentBorderColor: "",
  toastContentShadow: "",
  toastContentColor: "",
  toastContentFilterBlur: "",
  toastContentFontFamily: "",
  toastContentFontSize: "",
  toastContentBorderRadius: "",
  toastContentHeight: "",
  // ----------------------------------------- Toast ------------------------------------------
  // ----------------------------------------- Tabs ------------------------------------------
  // Tabs Active
  tabsActiveContentBackgroundColor: "",
  tabsActiveContentBackgroundImage: "",
  tabsActiveContentBackgroundGradient: "",
  tabsActiveContentBorderWidth: "",
  tabsActiveContentBorderStyle: "",
  tabsActiveContentBorderColor: "",
  tabsActiveContentShadow: "",
  tabsActiveContentColor: "",
  tabsActiveContentFilterBlur: "",
  tabsActiveContentFontFamily: "",
  tabsActiveContentFontSize: "",
  tabsActiveContentBorderRadius: "",
  tabsActiveContentHeight: "",
  // Tabs Item
  tabsItemContentBackgroundColor: "",
  tabsItemContentBackgroundImage: "",
  tabsItemContentBackgroundGradient: "",
  tabsItemContentBorderWidth: "",
  tabsItemContentBorderStyle: "",
  tabsItemContentBorderColor: "",
  tabsItemContentShadow: "",
  tabsItemContentColor: "",
  tabsItemContentFilterBlur: "",
  tabsItemContentFontFamily: "",
  tabsItemContentFontSize: "",
  tabsItemContentBorderRadius: "",
  tabsItemContentHeight: "",

  // ----------------------------------------- End Tabs ------------------------------------------
  // ----------------------------------------- Pop up ------------------------------------------
  // PopUp
  popUpBackgroundColor: "",
  popUpBackgroundImage: "",
  popUpBackgroundGradient: "",
  popUpBorderWidth: "",
  popUpBorderStyle: "",
  popUpBorderColor: "",
  popUpShadow: "",
  popUpColor: "",
  popUpFilterBlur: "",
  popUpFontFamily: "",
  popUpFontSize: "",
  popUpBorderRadius: "",
  popUpHeight: "",
  // ----------------------------------------- End Pop up ------------------------------------------

  // End Selected
  changeStyle: (state) => {
    console.log(state);
    const property = state.property;
    set({ [property]: state.value });
  },
}));

export default useStyleStore;

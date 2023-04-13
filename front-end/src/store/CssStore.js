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
  cardContentBackground :"",
  cardContentColor :"",
  cardContentBorderRadius :"",
  cardContentBorderWidth :"",
  cardContentBorderStyle :"",
  cardContentBorderColor :"",


  // Button
  buttonPrimary: "",
  buttonSecondary: "",
  buttonPrimaryOutline: "",
  buttonSecondaryOutline: "",


  

  // Table
  tableTextColor: "",
  tableBackgroundFilter: "",
  tableBackgroundSearch: "",
  tableBackgroundButton: "",
  

  // ToggleSwitch
  switchToggleOn: "",
  switchToggleBackgroundOn: "",
  switchToggleOff: "",
  switchToggleBackgroundOff: "",

  // Label
  labelTextColor: "",

  // Input
  inputTextColor: "",
  inputBackgroundColor: "",
  inputBorderRadius: "",

  changeStyle:(state)=>{
    console.log(state);
    const property = state.property;
    set({[property]:state.value})
  },
}));

export default useStyleStore;

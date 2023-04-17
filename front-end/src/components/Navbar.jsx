import React from "react";
import useStyleStore from "../store/CssStore";

const Navbar = () => {
  const stateComponents = useStyleStore((state) => state);

  const handleSaveButton = () => {
    const components = {
      breadcrumbs: {
        breadcrumbBackground: stateComponents.breadcrumbBackground,
        breadcrumbBorderColor: stateComponents.breadcrumbBorderColor,
        breadcrumbBorderRadius: stateComponents.breadcrumbBorderRadius,
        breadcrumbBorderStyle: stateComponents.breadcrumbBorderStyle,
        breadcrumbBorderWidth: stateComponents.breadcrumbBorderWidth,
        breadcrumbTextActive: stateComponents.breadcrumbTextActive,
        breadcrumbTextColor: stateComponents.breadcrumbTextColor,
        breadcrumbTextTitle: stateComponents.breadcrumbTextTitle,
      },
      buttonPrimary: {
        btnPrimaryActiveBackground: stateComponents.btnPrimaryActiveBackground,
        btnPrimaryActiveText: stateComponents.btnPrimaryActiveText,
        btnPrimaryBackground: stateComponents.btnPrimaryBackground,
        btnPrimaryBorderRadius: stateComponents.btnPrimaryBorderRadius,
        btnPrimaryHoverBackground: stateComponents.btnPrimaryHoverBackground,
        btnPrimaryHoverText: stateComponents.btnPrimaryHoverText,
        btnPrimaryOutline: stateComponents.btnPrimaryOutline,
        btnPrimaryOutlineText: stateComponents.btnPrimaryOutlineText,
        btnPrimaryTextColor: stateComponents.btnPrimaryTextColor,
      },
      buttonSecondary: {
        btnSecondaryActiveBackground:
          stateComponents.btnSecondaryActiveBackground,
        btnSecondaryActiveText: stateComponents.btnSecondaryActiveText,
        btnSecondaryBackground: stateComponents.btnSecondaryBackground,
        btnSecondaryBorderRadius: stateComponents.btnSecondaryBorderRadius,
        btnSecondaryHoverBackground:
          stateComponents.btnSecondaryHoverBackground,
        btnSecondaryHoverText: stateComponents.btnSecondaryHoverText,
        btnSecondaryOutline: stateComponents.btnSecondaryOutline,
        btnSecondaryOutlineText: stateComponents.btnSecondaryOutlineText,
        btnSecondaryTextColor: stateComponents.btnSecondaryTextColor,
      },

      card: {
        cardBackground: stateComponents.cardBackground,
        cardBackgroundProgress: stateComponents.cardBackgroundProgress,
        cardBorderColor: stateComponents.cardBorderColor,
        cardBorderRadius: stateComponents.cardBorderRadius,
        cardBorderStyle: stateComponents.cardBorderStyle,
        cardBorderWidth: stateComponents.cardBorderWidth,
        cardContentBackground: stateComponents.cardContentBackground,
        cardContentBorderColor: stateComponents.cardContentBorderColor,
        cardContentBorderRadius: stateComponents.cardContentBorderRadius,
        cardContentBorderStyle: stateComponents.cardContentBorderStyle,
        cardContentBorderWidth: stateComponents.cardContentBorderWidth,
        cardContentColor: stateComponents.cardContentColor,
        cardFormBackground: stateComponents.cardFormBackground,
        cardFormColor: stateComponents.cardFormColor,
        cardGaugeBackground: stateComponents.cardGaugeBackground,
        cardGaugeValueColor: stateComponents.cardGaugeValueColor,
        cardLoginBackground: stateComponents.cardLoginBackground,
        cardLoginHeading: stateComponents.cardLoginHeading,
        cardLoginTextColor: stateComponents.cardLoginTextColor,
        cardMonitorBackground: stateComponents.cardMonitorBackground,
        cardMonitorColor: stateComponents.cardMonitorColor,
        cardTextColorPrimary: stateComponents.cardTextColorPrimary,
      },
      input: {
        inputLabelColor: stateComponents.inputLabelColor,
        inputTextBackground: stateComponents.inputTextBackground,
        inputTextColor: stateComponents.inputTextColor,
      },
      login: {
        loginButtonBackground: stateComponents.loginButtonBackground,
        loginButtonTextColor: stateComponents.loginButtonTextColor,
        loginInputBackground: stateComponents.loginInputBackground,
        loginInputTextColor: stateComponents.loginInputTextColor,
        loginLabelColor: stateComponents.loginLabelColor,
      },
      monitor: {
        monitorBorderBackground: stateComponents.monitorBorderBackground,
      },
      navbar: {
        navbarBackground: stateComponents.navbarBackground,
        navbarBorderColor: stateComponents.navbarBorderColor,
        navbarBorderRadius: stateComponents.navbarBorderRadius,
        navbarBorderStyle: stateComponents.navbarBorderStyle,
        navbarBorderWidth: stateComponents.navbarBorderWidth,
        navbarTextColor: stateComponents.navbarTextColor,
        navbarTextHover: stateComponents.navbarTextHover,
      },
      popup: {
        popUpBtnBackground: stateComponents.popUpBtnBackground,
        popUpBtnTextColor: stateComponents.popUpBtnTextColor,
        popUpCardBackground: stateComponents.popUpCardBackground,
        popUpFailedBackground: stateComponents.popUpFailedBackground,
        popUpFailedColor: stateComponents.popUpFailedColor,
        popUpSuccessBackground: stateComponents.popUpSuccessBackground,
        popUpSuccessColor: stateComponents.popUpSuccessColor,
        popUpTextColor: stateComponents.popUpTextColor,
      },
      select: {
        selectLabelColor: stateComponents.selectLabelColor,
        selectTextBackground: stateComponents.selectTextBackground,
        selectTextColor: stateComponents.selectTextColor,
      },
      sidebar: {
        sidebarBackground: stateComponents.sidebarBackground,
        sidebarBorderColor: stateComponents.sidebarBorderColor,
        sidebarBorderRadius: stateComponents.sidebarBorderRadius,
        sidebarBorderStyle: stateComponents.sidebarBorderStyle,
        sidebarBorderWidth: stateComponents.sidebarBorderWidth,
        sidebarLinkBackgroundActive:
          stateComponents.sidebarLinkBackgroundActive,
        sidebarLinkBorderColor: stateComponents.sidebarLinkBorderColor,
        sidebarLinkBorderRadius: stateComponents.sidebarLinkBorderRadius,
        sidebarLinkBorderStyle: stateComponents.sidebarLinkBorderStyle,
        sidebarLinkBorderWidth: stateComponents.sidebarLinkBorderWidth,
        sidebarLinkTextColor: stateComponents.sidebarLinkTextColor,
        sidebarTextColor: stateComponents.sidebarTextColor,
      },
      table: {
        tableBackgroundButton: stateComponents.tableBackgroundButton,
        tableBackgroundFilter: stateComponents.tableBackgroundFilter,
        tableBackgroundSearch: stateComponents.tableBackgroundSearch,
        tableFilterColor: stateComponents.tableFilterColor,
        tableHeader: stateComponents.tableHeader,
        tableRowEven: stateComponents.tableRowEven,
        tableRowOdd: stateComponents.tableRowOdd,
        tableSearchColor: stateComponents.tableSearchColor,
        tableTextColor: stateComponents.tableTextColor,
        textAreaBackground: stateComponents.textAreaBackground,
        textAreaColor: stateComponents.textAreaColor,
        valueColor: stateComponents.valueColor,
      },
    };

    console.log(components);
  };

  return (
    <div className="navbar bg-base-200 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Dashboard CSS Generator
        </a>
      </div>
      <div className="flex gap-5">
        <button className="btn btn-primary" onClick={handleSaveButton}>
          Save
        </button>
        <button className="btn btn-primary">Reset</button>
      </div>
    </div>
  );
};

export default Navbar;
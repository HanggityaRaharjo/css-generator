import React from "react";
import useStyleStore from "../store/CssStore";
import axios from "axios";

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
        BackgroundColor: stateComponents.sidebarBackgroundColor,
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
        Color: stateComponents.sidebarColor,
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
      header: {
        BackgroundColor: stateComponents.headerBackgroundColor,
        BackgroundGradient: stateComponents.headerBackgroundGradient,
        BorderWidth: stateComponents.headerBorderWidth,
        BorderColor: stateComponents.headerBorderColor,
        Shadow: stateComponents.headerShadow,
        Color: stateComponents.headerColor,
        Height: stateComponents.headerHeight,
      },
      content: {
        BackgroundColor: stateComponents.contentBackgroundColor,
        BackgroundGradient: stateComponents.contentBackgroundGradient,
        Color: stateComponents.contentColor,
      },
      button: {
        Primary: {
          BackgroundColor: stateComponents.btnPrimaryBackground,
        },
        Secondary: {
          BackgroundColor: stateComponents.btnSecondaryBackground,
        },
        Success: {
          BackgroundColor: stateComponents.btnSuccessBackground,
        },
        Error: {
          BackgroundColor: stateComponents.btnErrorBackground,
        },
        Warning: {
          BackgroundColor: stateComponents.btnWarningBackground,
        },
        Info: {
          BackgroundColor: stateComponents.btnInfoBackground,
        },
      },
      modal: {
        modalHeader: {
          BackgroundColor: stateComponents.modalHeaderBackgroundColor,
        },
        modalBody: {
          BackgroundColor: stateComponents.modalBodyBackgroundColor,
        },
        modalFooter: {
          BackgroundColor: stateComponents.modalFooterBackgroundColor,
        },
      },
      themeColor: {
        colorPrimary: stateComponents.colorPrimary,
        colorSecondary: stateComponents.colorSecondary,
        colorSuccess: stateComponents.colorSuccess,
        colorWarning: stateComponents.colorWarning,
        colorInfo: stateComponents.colorInfo,
        colorDanger: stateComponents.colorDanger,
      },
    };

    axios
      .post("http://localhost:8000/api/tes", {
        components: components,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

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

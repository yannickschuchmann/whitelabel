import React from "react";
import { withTranslation } from "../../i18n";
import { Navigation } from "@deepchange/building-blocks";

const Header = ({ t }) => {
  const navLinks = [
    {
      text: t("nav.vision"),
      target: "#vision",
      url: "#vision",
    },
    {
      text: t("nav.mission"),
      target: "#mission",
      url: "#mission",
    },
    {
      text: t("nav.value-props"),
      target: "#value-props",
      url: "#value-props",
    },
    {
      text: t("nav.free-trial"),
      target: "#free-trial",
      url: "#free-trial",
    },
    {
      text: t("nav.about-us"),
      target: "#about-us",
      url: "#about-us",
    },
    {
      text: t("nav.deepchange"),
      target: "#deepchange",
      url: "#deepchange",
    },
    {
      text: t("nav.contact"),
      target: "#contact",
      url: "#contact",
    },
  ];
  return <Navigation logoSrc="/logo.png" links={navLinks} />;
};

export default withTranslation("common")(Header);

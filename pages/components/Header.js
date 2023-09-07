import React from "react";
import { Link, Trans, withTranslation } from "../../i18n";
import { CookiePolicy, Navigation } from "@deepchange/building-blocks";

const Header = ({ t }) => {
  const navLinks = [
    {
      text: t("nav.vision"),
      target: "#vision",
      url: "/#vision",
    },
    {
      text: t("nav.mission"),
      target: "#mission",
      url: "/#mission",
    },
    {
      text: t("nav.value-props"),
      target: "#value-props",
      url: "/#value-props",
    },
    {
      text: t("nav.free-trial"),
      target: "#free-trial",
      url: "/#free-trial",
    },
    {
      text: t("nav.about-us"),
      target: "#about-us",
      url: "/#about-us",
    },
    {
      text: t("nav.deepchange"),
      target: "#deepchange",
      url: "/#deepchange",
    },
    {
      text: t("nav.contact"),
      target: "#contact",
      url: "/#contact",
    },
  ];
  return (
    <React.Fragment>
      <CookiePolicy
        title={t("cookies.title")}
        necessaryText={<Trans t={t} i18nKey="cookies.necessary" />}
        analyticalText={<Trans t={t} i18nKey="cookies.analytical" />}
        buttonSelectedText={t("cookies.buttonSelected")}
        buttonAllText={t("cookies.buttonAll")}
      >
        <p className="mb-3">{t("cookies.why")}</p>
        <Link href="/privacy" className="has-text-black is-underlined">
          {t("cookies.more")}
        </Link>
      </CookiePolicy>
      <Navigation logoSrc="/logo.svg" links={navLinks} />
    </React.Fragment>
  );
};

export default withTranslation("common")(Header);

import Head from "next/head";
import { Trans } from "../i18n";
import styles from "../styles/Start.module.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import {
  BodySegment,
  BodySegments,
  Footer,
  SocialButton,
} from "@deepchange/building-blocks";
import { useTranslation, withTranslation } from "../i18n";

const Legal = ({ t }) => {
  const { t: commonT } = useTranslation("common");
  return (
    <div className={styles.container}>
      <Head>
        <title>Whitelabel Legal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div id="legal">
        <BodySegments title={t("title")} titlePosition="right">
          <BodySegment title="">
            <Trans t={t} i18nKey="address" />
          </BodySegment>
          <BodySegment title={t("representative.title")}>
            {t("representative.text")}
          </BodySegment>
          <BodySegment title={t("contact.title")}>
            <Trans
              t={t}
              i18nKey="contact.text"
              components={{
                mailto: <a href="mailto:we@deepchange.io"></a>,
              }}
            />
          </BodySegment>
          <BodySegment title={t("vat.title")}>{t("vat.text")}</BodySegment>
          <BodySegment title={t("commercialRegistration.title")}>
            <Trans t={t} i18nKey="commercialRegistration.text" />
          </BodySegment>
          <BodySegment title={t("odr.title")}>
            <Trans
              t={t}
              i18nKey="odr.text"
              components={{
                a: <a href="https://webgate.ec.europa.eu/odr/"></a>,
                mailto: <a href="mailto:we@deepchange.io"></a>,
              }}
            />
          </BodySegment>
          <BodySegment title={t("responsiblePerson.title")}>
            <Trans t={t} i18nKey="responsiblePerson.text" />
          </BodySegment>
          <BodySegment title={t("icons.title")}>
            <Trans
              t={t}
              i18nKey="icons.text"
              components={{
                a: <a href="https://www.flaticon.com"></a>,
              }}
            />
          </BodySegment>
        </BodySegments>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer
        logoSrc="/logo.png"
        navLinks={[
          {
            text: commonT("nav.vision"),
            target: "#vision",
            url: "/#vision",
          },
          {
            text: commonT("nav.mission"),
            target: "#mission",
            url: "/#mission",
          },
          {
            text: commonT("nav.value-props"),
            target: "#value-props",
            url: "/#value-props",
          },
          {
            text: commonT("nav.free-trial"),
            target: "#free-trial",
            url: "/#free-trial",
          },
          {
            text: commonT("nav.about-us"),
            target: "#about-us",
            url: "/#about-us",
          },
          {
            text: commonT("nav.deepchange"),
            target: "#deepchange",
            url: "/#deepchange",
          },
          {
            text: commonT("nav.contact"),
            target: "#contact",
            url: "/#contact",
          },
          {
            text: commonT("nav.legal"),
            url: "/legal",
          },
        ]}
        socialButtons={[
          <SocialButton
            key="ig"
            icon="instagram"
            url="https://instagram.com/whatever"
          />,
          <SocialButton
            key="tw"
            icon="twitter"
            url="https://twitter.com/whatever"
          />,
          <SocialButton
            key="fb"
            icon="facebook"
            url="https://facebook.com/whatever"
          />,
        ]}
      />
    </div>
  );
};

Legal.getInitialProps = async () => ({
  namespacesRequired: ["common", "start"],
});

export default withTranslation("legal")(Legal);

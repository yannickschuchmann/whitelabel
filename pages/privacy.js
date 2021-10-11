import Head from "next/head";
import styles from "../styles/Start.module.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { BodySegment, BodySegments, Footer } from "@deepchange/building-blocks";
import { withTranslation } from "../i18n";

const Privacy = ({ t }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("pagetitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div id="value-props">
        <BodySegments title={t("title")}>
          <BodySegment title={t("downloads.title")}>
            <a href="/legal/privacyStatement_de_08092020.pdf">
              {t("downloads.de")}
            </a>
            <br />
            <a href="/legal/privacy_statement_20200912.pdf">
              {t("downloads.en")}
            </a>
          </BodySegment>
        </BodySegments>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

Privacy.getInitialProps = async () => ({
  namespacesRequired: ["common", "privacy"],
});

export default withTranslation("privacy")(Privacy);

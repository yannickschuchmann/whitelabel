import App from "next/app";
import { appWithTranslation } from "../i18n";
import "../styles/globals.css";
import "../styles/bulma.sass";
import "@deepchange/building-blocks/dist/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import smoothscroll from "smoothscroll-polyfill";
if (process.browser) {
  smoothscroll.polyfill();
}

import { config, library } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faCheck, faTwitter, faFacebook, faInstagram);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);

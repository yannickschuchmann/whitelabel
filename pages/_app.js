import "../styles/globals.css";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

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

export default MyApp;

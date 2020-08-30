import React from "react";
import { withTranslation } from "../../i18n";
import { CallToActionSection } from "@deepchange/building-blocks";

const Contact = ({ t }) => (
  <CallToActionSection>
    <button className="button is-black is-uppercase">{t("contact-us")}</button>
  </CallToActionSection>
);

export default withTranslation("common")(Contact);

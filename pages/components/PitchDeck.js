import React from "react";
import { withTranslation } from "../../i18n";
import { CallToActionSection } from "@deepchange/building-blocks";

const PitchDeck = ({ t }) => (
  <CallToActionSection>
    <button className="button is-light is-uppercase">{t("pitch-deck")}</button>
  </CallToActionSection>
);

export default withTranslation("common")(PitchDeck);

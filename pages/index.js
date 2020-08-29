import Head from "next/head";
import styles from "../styles/Start.module.css";
import Header from "./components/Header";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Contact from "../components/Contact";
import PitchDeck from "../components/PitchDeck";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import FreeTrial from "../components/FreeTrial";
import MediaContent from "../components/MediaContent";
import BodySegments, { Segment } from "../components/BodySegments";
import ListItem from "../components/ListItem";
import SocialButton from "../components/SocialButton/SocialButton";
import { withTranslation } from "../i18n";

const socialProofImages = Array.from({ length: 6 }).fill({
  src: "/acme.svg",
  url: "https://google.com",
  alt: "Logo of ACME",
});

const Start = ({ t }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whitelabel Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <SocialProof images={socialProofImages}>{t("socialProof")}</SocialProof>
      <Contact />
      <div id="vision">
        <MediaContent
          imageSrc="/vision.jpg"
          imageAlt="Showing a board saying 'Difficult roads lead to beautiful destinations'"
          title="Vision"
        >
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </MediaContent>
      </div>
      <div id="mission">
        <MediaContent
          imageSrc="/mission.jpg"
          imageAlt="Showing a board saying 'Difficult roads lead to beautiful destinations'"
          title="Mission"
          mediaPosition="right"
          backgroundColor="#f4f4f4"
        >
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
          <hr />
          <ListItem
            imageSrc="/icons/mission.svg"
            imageAlt="A mountain with a flag on the peak"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptate
          </ListItem>
          <ListItem
            imageSrc="/icons/mission.svg"
            imageAlt="A mountain with a flag on the peak"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptate
          </ListItem>
          <ListItem
            imageSrc="/icons/mission.svg"
            imageAlt="A mountain with a flag on the peak"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptate
          </ListItem>
        </MediaContent>
      </div>
      <div id="value-props">
        <BodySegments title="Value Propositions" titlePosition="right">
          <Segment title="Value prop A">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
            quasi nihil aspernatur, veritatis eos facilis iure libero, at
            aliquid minus quis dolor beatae in!
          </Segment>
          <Segment title="Value prop B">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
            quasi nihil aspernatur, veritatis eos facilis iure libero, at
            aliquid minus quis dolor beatae in!
          </Segment>
          <Segment title="Value prop C">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
            quasi nihil aspernatur, veritatis eos facilis iure libero, at
            aliquid minus quis dolor beatae in!
          </Segment>
          <Segment title="Value prop D">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
            quasi nihil aspernatur, veritatis eos facilis iure libero, at
            aliquid minus quis dolor beatae in!
          </Segment>
          <Segment title="Value prop E">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
            quasi nihil aspernatur, veritatis eos facilis iure libero, at
            aliquid minus quis dolor beatae in!
          </Segment>
          <Segment title="Value prop F">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
            quasi nihil aspernatur, veritatis eos facilis iure libero, at
            aliquid minus quis dolor beatae in!
          </Segment>
        </BodySegments>
      </div>
      <PitchDeck />
      <Contact />
      <div id="free-trial">
        <FreeTrial />
      </div>
      <div id="about-us">
        <MediaContent
          imageSrc="/team.jpg"
          imageAlt="A team group photo"
          title="Team"
          mediaPosition="right"
          backgroundColor="#f4f4f4"
        >
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </MediaContent>
      </div>
      <div id="deepchange">
        <MediaContent
          imageSrc="/community.png"
          imageAlt=""
          titleUppercase={false}
          title="deepchange NETWORK"
        >
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
          <div className="my-5 has-text-centered">
            <button className="button is-uppercase is-light">Network</button>
          </div>
        </MediaContent>
      </div>
      <br />
      <br />
      <Quote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </Quote>
      <div id="contact">
        <Contact />
      </div>
      <Footer
        navigation={[
          ["Vision", "#vision"],
          ["Mission", "#mission"],
          ["Value Propositions", "#value-props"],
          ["Free Trial", "#free-trial"],
          ["deepchange network", "#deepchange"],
          ["About us", "#about"],
          ["Contact", "#contact"],
          ["Legal", "#legal"],
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

Start.getInitialProps = async () => ({
  namespacesRequired: ["common", "start"],
});

export default withTranslation("start")(Start);

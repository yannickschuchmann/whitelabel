import Head from "next/head";
import styles from "../styles/Start.module.css";
import Contact from "./components/Contact";
import PitchDeck from "./components/PitchDeck";
import Header from "./components/Header";
import {
  BodySegment,
  BodySegments,
  Footer,
  Form,
  FormEmailField,
  FormInputField,
  Hero,
  ListItem,
  MediaContent,
  Quote,
  SocialButton,
  SocialProof,
} from "@deepchange/building-blocks";
import { useTranslation, withTranslation } from "../i18n";

const socialProofImages = Array.from({ length: 6 }).fill({
  src: "/acme.svg",
  url: "https://google.com",
  alt: "Logo of ACME",
});

const FREE_TRIAL_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwJBcYrtIoU5oEThnYgxO7cDb2vX3xukk4VDJtmB_lO2_hf416M/exec";

const Start = ({ t }) => {
  const { t: commonT } = useTranslation("common");
  return (
    <div className={styles.container}>
      <Head>
        <title>Whitelabel Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero headline="headline" subline="subline" />
      <SocialProof images={socialProofImages}>{t("socialProof")}</SocialProof>
      <SocialProof centered images={socialProofImages.splice(0, 2)}>
        {t("socialProof-centered")}
      </SocialProof>
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
        <BodySegments
          title="Value Propositions"
          // titlePosition="left"
          contentClassName=""
        >
          <div className="columns is-multiline">
            <BodySegment
              iconSrc="/icons/affected.png"
              className=""
              title="Value prop A"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
              quasi nihil aspernatur, veritatis eos facilis iure libero, at
              aliquid minus quis dolor beatae in!
            </BodySegment>
            <BodySegment
              iconSrc="/icons/affected.png"
              className=""
              title="Value prop B"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
              quasi nihil aspernatur, veritatis eos facilis iure libero, at
              aliquid minus quis dolor beatae in!
            </BodySegment>
            <BodySegment
              iconSrc="/icons/affected.png"
              className=""
              title="Value prop C"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
              quasi nihil aspernatur, veritatis eos facilis iure libero, at
              aliquid minus quis dolor beatae in!
            </BodySegment>
          </div>
          <div className="columns is-multiline">
            <BodySegment title="Value prop D">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
              quasi nihil aspernatur, veritatis eos facilis iure libero, at
              aliquid minus quis dolor beatae in!
            </BodySegment>
            <BodySegment title="Value prop E">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
              quasi nihil aspernatur, veritatis eos facilis iure libero, at
              aliquid minus quis dolor beatae in!
            </BodySegment>
            <BodySegment title="Value prop F">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus quaerat animi dolorem voluptatem dolore perspiciatis
              quasi nihil aspernatur, veritatis eos facilis iure libero, at
              aliquid minus quis dolor beatae in!
            </BodySegment>
          </div>
        </BodySegments>
      </div>
      <PitchDeck />
      <Contact />
      <section id="free-trial" className="section">
        <Form
          headline="Want to take a free trial?"
          subline="Beta access is available upon request. The release of new features is
          done in regular cycles."
          formTitle="Sign up for a free trial"
          buttonText="Send"
          requiredText="This field is required"
          endpoint={FREE_TRIAL_ENDPOINT}
        >
          <div className="columns">
            <div className="column">
              <FormInputField
                name="first_name"
                placeholder="First Name*"
                required
              />
            </div>
            <div className="column">
              <FormInputField
                name="last_name"
                placeholder="Last Name*"
                required
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <FormEmailField
                name="email"
                placeholder="Email address*"
                patternText="This is not a valid email"
                required
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <FormInputField name="phone" placeholder="Phone" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <FormInputField name="company" placeholder="Company" />
            </div>
          </div>
        </Form>
      </section>
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
      <Quote showQuotes={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </Quote>
      <Quote author="Mark Twain">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </Quote>
      <div id="contact">
        <Contact />
      </div>
      <Footer
        logoSrc="/logo.png"
        navLinks={[
          {
            text: commonT("nav.vision"),
            target: "#vision",
            url: "#vision",
          },
          {
            text: commonT("nav.mission"),
            target: "#mission",
            url: "#mission",
          },
          {
            text: commonT("nav.value-props"),
            target: "#value-props",
            url: "#value-props",
          },
          {
            text: commonT("nav.free-trial"),
            target: "#free-trial",
            url: "#free-trial",
          },
          {
            text: commonT("nav.about-us"),
            target: "#about-us",
            url: "#about-us",
          },
          {
            text: commonT("nav.deepchange"),
            target: "#deepchange",
            url: "#deepchange",
          },
          {
            text: commonT("nav.contact"),
            target: "#contact",
            url: "#contact",
          },
        ]}
        secondaryNavLinks={[
          {
            text: commonT("nav.privacy"),
            url: "/privacy",
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

Start.getInitialProps = async () => ({
  namespacesRequired: ["common", "start"],
});

export default withTranslation("start")(Start);

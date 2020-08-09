import Head from "next/head";
import styles from "../styles/Start.module.css";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Contact from "../components/Contact";
import MediaContent from "../components/MediaContent";

const socialProofImages = Array.from({ length: 6 }).fill({
  src: "/acme.svg",
  url: "https://google.com",
  alt: "Logo of ACME",
});

export default function Start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whitelabel Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <SocialProof images={socialProofImages}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </SocialProof>
      <Contact />
      <MediaContent
        imageSrc="/vision.jpg"
        imageAlt="Showing a board saying 'Difficult roads lead to beautiful destinations'"
        title="Vision"
      >
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </MediaContent>
      <MediaContent
        imageSrc="/mission.jpg"
        imageAlt="Showing a board saying 'Difficult roads lead to beautiful destinations'"
        title="Mission"
        mediaPosition="right"
      >
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </MediaContent>
    </div>
  );
}

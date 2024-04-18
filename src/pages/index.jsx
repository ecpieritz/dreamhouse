import Head from "next/head";
import Header from "../../components/Header";
import HomeBanner from "../../components/Banner";
import HomeServices from "../../components/Services";
import HomeTestimonials from "../../components/Testimonial";
import HomeProjects from "../../components/Projects";
import HomeCounters from "../../components/Counters";
import ContactBanner from "../../components/ContactBanner";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>

        <title>DreamHouse</title>
      </Head>

      <Header />

      <main>
        <div className="container">
          <HomeBanner />
          <HomeServices />
          <HomeTestimonials />
          <HomeProjects />
          <HomeCounters />
        </div>

        <ContactBanner />
      </main>

      <Footer />

    </>
  );
}

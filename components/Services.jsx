import styles from "../styles/homeServices.module.css";
import CardOnlyText from "./CardOnlyText";
import Image from "next/image";

export default function HomeServices() {
  const services = [
    {
      title: "Project Plan",
      text: "With a keen eye for detail, our project plans are designed to reflect your unique style and preferences, promising an outcome that exceeds expectations.",
      link: "#contact",
    },
    {
      title: "Interior Work",
      text: "From bespoke furniture to intricate decor, our interior work reflects a harmonious blend of aesthetics and functionality, curated to elevate your living experience.",
      link: "#contact",
    },
    {
      title: "Realization",
      text: "Witness your dreams materialize before your eyes as we breathe life into your vision, orchestrating each element with care and expertise to realize spaces that resonate with your soul.",
      link: "#contact",
    },
  ];

  return (
    <section className={styles.homeServices} id="services">
      <div className="row">
        {services.map((service, index) => (
          <CardOnlyText
            key={index}
            title={service.title}
            text={service.text}
            link={service.link}
          />
        ))}
      </div>

      <Image
        className={styles.servicesImg}
        src="/imgs/dh-home--img02.png"
        alt="designs"
        width={1300}
        height={600}
      />
    </section>
  );
}

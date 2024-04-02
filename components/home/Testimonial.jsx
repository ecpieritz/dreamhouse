import styles from "../../styles/homeTestimonials.module.css";
import CardTestimonial from "../CardTestimonial";

export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Natasha",
      location: "Curitiba, Brazil",
      text: "DreamHouse exceeded my expectations! Their attention to detail and commitment to bringing my vision to life made the entire process seamless and enjoyable.",
      link: "/imgs/dh-home--testimonial-01.png",
    },
    {
      name: "Sarah",
      location: "Lisbon, Portugal",
      text: "I couldn't be happier with the outcome of our project. DreamHouse's expertise in interior design transformed our space into a true reflection of our style and personality.",
      link: "/imgs/dh-home--testimonial-02.png",
    },
    {
      name: "Henrique",
      location: "Berlim, Germany",
      text: "Working with DreamHouse was a pleasure from start to finish. Their professionalism and creativity turned our house into a home we never want to leave.",
      link: "/imgs/dh-home--testimonial-03.png",
    },
  ];

  return (
    <section className={styles.homeTestimonials}>
      <h2 className={styles.testimonialTitle}>What the People Thinks <br className="mob-none"/>About Us</h2>
        <div className="row">
          {testimonials.map((service, index) => (
            <CardTestimonial
              key={index}
              name={service.name}
              location={service.location}
              text={service.text}
              link={service.link}
            />
          ))}
        </div>
    </section>
  );
}

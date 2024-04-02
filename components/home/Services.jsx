import CardOnlyText from "../CardOnlyText";

export default function HomeServices() {
  const services = [
    {
      title: "Project Plan",
      text: "With a keen eye for detail, our project plans are designed to reflect your unique style and preferences, promising an outcome that exceeds expectations.",
      link: "/projects"
    },
    {
      title: "Interior Work",
      text: "From bespoke furniture to intricate decor, our interior work reflects a harmonious blend of aesthetics and functionality, curated to elevate your living experience.",
      link: "/services"
    },
    {
      title: "Realization",
      text: "Witness your dreams materialize before your eyes as we breathe life into your vision, orchestrating each element with care and expertise to realize spaces that resonate with your soul.",
      link: "/prices"
    },
  ];

  return (
    <section>
      <div className="container">
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
      </div>
    </section>
  );
}

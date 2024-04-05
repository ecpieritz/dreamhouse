import Titles from "../Titles";
import CardImages from "../CardImages";

export default function HomeProjects() {
  const projects = [
    {
      projectName: "Modern Bedroom",
      detail: "Decor / Artchitecture",
      link: "/imgs/dh-home--projects-01.png",
    },
    {
      projectName: "Modern Bedroom",
      detail: "Decor / Artchitecture",
      link: "/imgs/dh-home--projects-02.png",
    },
    {
      projectName: "Modern Bedroom",
      detail: "Decor / Artchitecture",
      link: "/imgs/dh-home--projects-03.png",
    },
    {
      projectName: "Modern Bedroom",
      detail: "Decor / Artchitecture",
      link: "/imgs/dh-home--projects-04.png",
    }
  ];

  return (
    <section>
      <Titles
        title="Follow Our Projects"
        subtitle="Stay updated with our latest projects and design inspirations. Follow along as we turn dreams into reality, one project at a time."
      />
      <div className="row justify-content-around">
          {projects.map((project, index) => (
            <CardImages
              key={index}
              projectName={project.projectName}
              detail={project.detail}
              link={project.link}
            />
          ))}
        </div>
    </section>
  );
}
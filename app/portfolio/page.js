import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";

const DUMMY_PROJECTS = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora olus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eos reiciendis! At eligen.",
    repositoryUrl: "https://github.com/arekmastalerczuk",
    imgSrc: "/lets_drone.png",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquets.",
    repositoryUrl: "https://github.com/arekmastalerczuk",
    imgSrc: "/lets_drone.png",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque phareteras.",
    repositoryUrl: "https://github.com/arekmastalerczuk",
    imgSrc: "/lets_drone.png",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu",
    repositoryUrl: "https://github.com/arekmastalerczuk",
    imgSrc: "/lets_drone.png",
  },
  {
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, cellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque phareteras.",
    repositoryUrl: "https://github.com/arekmastalerczuk",
    imgSrc: "/lets_drone.png",
  },
  {
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet, cellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque phareteras.",
    repositoryUrl: "https://github.com/arekmastalerczuk",
    imgSrc: "/lets_drone.png",
  },
  {
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet, cellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque phareteras.",
    repositoryUrl: "https://github.com/arekmastalerczuk",
    imgSrc: "/lets_drone.png",
  },
];

const Portfolio = () => {
  return (
    <>
      <h1 className="page-header">Portfolio</h1>
      <div className="bg-neutral-100/10 p-8 rounded-2xl flex flex-wrap justify-around space-y-8s">
        {DUMMY_PROJECTS.map((project) => (
          <PortfolioItem
            repositoryUrl={project.repositoryUrl}
            imgSrc={project.imgSrc}
            description={project.description}
            key={project.repositoryUrl}
          >
            {project.title}
          </PortfolioItem>
        ))}
      </div>
    </>
  );
};

export default Portfolio;

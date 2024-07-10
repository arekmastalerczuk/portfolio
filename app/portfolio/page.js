import { DUMMY_PROJECTS } from "@/app/portfolio/projects";
import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";

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

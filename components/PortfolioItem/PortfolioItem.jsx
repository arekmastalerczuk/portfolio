import Link from "next/link";
import Image from "next/image";

const PortfolioItem = ({ children, description, imgSrc, repositoryUrl }) => {
  return (
    <div className="max-w-lg p-4 hover:bg-neutral-100/20 hover:scale-105 duration-500 rounded-xl flex flex-col items-center">
      <h2 className="self-start">{children}</h2>
      <p>{description}</p>
      <Link href={repositoryUrl} target="_blank">
        <div className="relative w-96 lg:w-[440px] aspect-video">
          <Image
            layout="fill"
            objectFit="cover"
            src={imgSrc}
            alt="Project image"
            className="mt-4"
          />
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItem;

import Link from "next/link";
import Image from "next/image";

const PortfolioItem = ({ children, description, imgSrc, repositoryUrl }) => {
  return (
    <Link href={repositoryUrl} target="_blank">
      <div className="max-w-lg p-4 hover:bg-neutral-100/20 hover:scale-105 duration-500 rounded-xl flex flex-col items-center">
        <h2 className="self-start">{children}</h2>
        <p>{description}</p>

        <div className="relative w-96 lg:w-[440px] aspect-video my-4">
          <Image
            layout="fill"
            objectFit="cover"
            src={imgSrc}
            alt="Project image"
          />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;

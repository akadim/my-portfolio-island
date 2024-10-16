import { FC } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo: FC<HomeInfoProps> = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Kadim Ahmed</span>
        👋
        <br />A full-stack Web developer.
      </h1>
    );
  }

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>
        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Worked on numerous projects over the years. <br /> Curious about the
          projects?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
};

export default HomeInfo;
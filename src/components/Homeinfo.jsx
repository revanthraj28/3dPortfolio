import React from "react";
import { Link } from "react-router-dom";
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-sm text-center">{text}</p> {/* Changed to sm:text-sm */}
    <Link to={link} className="neo-brutalism-white neo-btn text-xs"> {/* Added text-xs for smaller button text */}
      {btnText} <img src={arrow} alt="arrow" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> {/* Changed to sm:text-sm */}
      HI, I am <span className="font-semibold">Revanth</span>👋
      <br />A Software Engineer
    </h1>
  ),
  2: <InfoBox text="Worked with some companies and picked up skill along the way" link="/about" btnText="Learn more" />,
  3: <InfoBox text="Developed some projects. Curious about the impact" link="/projects" btnText="Visit my Projects" />,
  4: <InfoBox text="Need an iOS or Full stack developer? Just a few keystrokes away" link="/contact" btnText="Let's talk" />,
};


const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;

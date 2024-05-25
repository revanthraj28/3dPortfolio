import React from "react";
import { Link } from "react-router-dom";
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">{btnText} <img src={arrow}/></Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      HI, I am <span className="font-semibold">Revanth</span>👋
      <br />A Software Engineer
    </h1>
  ),
  2: <InfoBox text="Worked with some companies and picked up skill along the way" link="/about" btnText="Learn more" />,
  3: <InfoBox text="Developed some projects. Curious about the impact" link="/projects" btnText="Visit my Projects" />,
  4: <InfoBox text="Need a Ios or Full stack developer? Just few Keystokes away" link="/contact" btnText="Let's talk" />,
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;

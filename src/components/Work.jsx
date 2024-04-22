import React from "react";
import TechStackImg from "../assets/techstack.png";
const data = [
  {
    year: *,
    title: "*",
    duration: "3 Years",
    details:
      "afgasfddsjk asjndaiowed asdnaierfmwsefasd asdjasiohwefr asidjaeifjwef asidjaosdq aosdjsuidhfertg, jkonasdnawdwad",
  },
  {
    year: *,
    title: "*",
    duration: "3 Years",
    details:
      "afgasfddsjk asjndaiowed asdnaierfmwsefasd asdjasiohwefr asidjaeifjwef asidjaosdq aosdjsuidhfertg, jkonasdnawdwad",
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "afgasfddsjk asjndaiowed asdnaierfmwsefasd asdjasiohwefr asidjaeifjwef asidjaosdq aosdjsuidhfertg, jkonasdnawdwad",
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "afgasfddsjk asjndaiowed asdnaierfmwsefasd asdjasiohwefr asidjaeifjwef asidjaosdq aosdjsuidhfertg, jkonasdnawdwad",
  },
];

export const Work = () => {
  return (
    <div id="work" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About</h1>
      <div className="m-4 p-4">
        <p className="flex text-1xl text-center text-[#001b5e] m-4 p-4">
          {" "}
          With a growth mindset and a commitment to continuous learning, I've
          strategically honed my IT skills over the years, adapting to new and
          complex challenges. My experience in IT Support has enhanced my
          communication skills, enabling me to collaborate effectively and
          deliver exceptional customer service. This foundation, coupled with my
          natural curiosity and problem-solving abilities, has fuelled my
          long-standing desire to pursue a career in software development. To
          bridge the gap and acquire the specialized skill set, I've embarked on
          the Software Engineering Bootcamp at Northcoders.
        </p>
        <img src={TechStackImg} alt="" />
      </div>
    </div>
  );
};

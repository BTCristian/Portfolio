import React from "react";
import { ProjectItem } from "./ProjectItem";
import calcProjectImg from "../assets/calcProject.png";
import JukeboxProjectImg from "../assets/JukeboxProject.png";
import MarketPlaceProjectImg from "../assets/MarketplaceProject1.png";
import NcNewsBEProjectImg from "../assets/NewsProject BE.png";
import NcNewsProjectImg from "../assets/NewsProject3.png";
import SignUpFormProjectImg from "../assets/SignUp Form (form validation).png";
import LwBProjectImg from "../assets/LwBProject3.png";

export const Projects = () => {
  return (
    <div id="projects" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 text-[#001b5e]">
        Fullstack projects developed using tech like: JavaScript, Node JS, React
        JS, Vite, Express JS, Axios, PotgreSQL, MongoDB, Firebase, WebRTC, Agora
        SDK, CSS, HTML, Tailwind CSS. Some of those projects are deplyed and
        live. Please try them here:
      </p>
      <div className="grid gap-12 text-center font-bold text-[blue] p-4 m-4">
        <ul>
          <li>
            <a href="https://cristian-nc8news.netlify.app/">
              <h1>News App/Website</h1>
            </a>
          </li>
          <li>
            <a href="https://learning-without-borders.netlify.app/">
              <h2>Learning without Borders</h2>
            </a>
          </li>
        </ul>
      </div>

      <p className="text-sm">
        *please allow few minutes to load first time...deployment can go in
        standby mode using eco-friendly system.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={calcProjectImg} title="Calculator App" />
        <ProjectItem img={JukeboxProjectImg} title="NC Jukebox App" />
        <ProjectItem img={SignUpFormProjectImg} title="Form validation" />
        <ProjectItem img={MarketPlaceProjectImg} title="E-Commerce App" />
        <ProjectItem img={NcNewsBEProjectImg} title="Backend" />
        <ProjectItem img={NcNewsProjectImg} title="News App" />
        <ProjectItem img={LwBProjectImg} title="LwB App" />
      </div>
    </div>
  );
};

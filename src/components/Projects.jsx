import React from "react";
import { ProjectItem } from "./ProjectItem";
import calcProjectImg from "../assets/calcProject.png";
import JukeboxProjectImg from "../assets/JukeboxProject.png";

export const Projects = () => {
  return (
    <div id="projects" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text=[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        kasdopadjef sadufniwerq aisduwrnwedf sdfosdfigjerig asdopaushdewgtfwse
        asdfopkaofq asdfnsiofwe asdfokjd0fquifbqwd afidsdufwetg
        qaoihj90qaewrhjiasd asidfsjhefguhqwd asdijeogkerghqybqw asidfjewgq wrqr
        asudhauf0tygwj asudhaydvqwd aisjd9ejgf9ierh wseiojausdbad
        qadiojqopejfweg aiujhdioefqewf qasd
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={calcProjectImg} title="Calculator App" />
        <ProjectItem img={JukeboxProjectImg} title="NC Jukebox App" />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      Projects
    </div>
  );
};

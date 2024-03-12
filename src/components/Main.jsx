import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1]"
        src="https://www.datocms-assets.com/38195/1606473114-office-work.jpg"
        alt="image of a woking office"
      />
      <div className="w-full h-screen absolute top-0 let-0 bg-white/75">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <div>
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
              I'm Cristian Badea
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
              I'm a
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Full-stack Software Developer",
                  2000,
                  "Programmer and I enjoy coding",
                  2000,
                  "Tech Enthusiast",
                  2000,
                  "Helpdesk/IT Support 1nd&2nd",
                  2000,
                  "Computer Hardware IT Technician",
                  2000,
                  "Coffee lover",
                  2000,
                  "Professional driver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-between pt-6 max-w-[200px] w-full">
              <a href="https://github.com/BTCristian"><FaGithub size={20} className="cursor-pointer"  /></a>
              <a href="https://www.linkedin.com/in/tiberiucristianb28/"><FaLinkedin size={20} className="cursor-pointer" /></a>
              <a href="https://twitter.com/BTCris21"><FaTwitter size={20} className="cursor-pointer" /></a>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

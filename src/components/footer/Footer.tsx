import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosFitness } from "react-icons/io";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-primary-950 p-2 text-primary-50/80">
      <div className="pointer-events-none  flex items-center justify-center gap-1 text-center font-accent text-base font-light">
        <IoIosFitness className="text-xl text-action-400" />
        <p>Powerforge fitness</p>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-4 text-center text-2xl">
        <div className="h-[0.1px] flex-grow bg-primary-50/20" />
        <a
          className="cursor-pointer transition-colors hover:text-primary-50"
          target="_blank"
          href="https://github.com/Fijalkowskim/Powerforge-Fitness"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="cursor-pointer transition-colors hover:text-primary-50"
          target="_blank"
          href="https://www.linkedin.com/in/mateusz-fija%C5%82kowski-a880742b5/"
          rel="noreferrer"
        >
          <CiLinkedin />
        </a>
        <div className="h-[0.1px] flex-grow bg-primary-50/20" />
      </div>

      <p className="text-sm font-light">&copy; 2024 All rights reserved</p>
    </div>
  );
}

export default Footer;

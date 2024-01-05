import React from "react";
import ProjectItem from "./ProjectItem";
import RecipeImg from "../assets/R_app_final.png";
import SeniorImg from "../assets/Senior.png";
const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project Screenshots</h1>
            <p className="text-center py-8 text-[#005e18f8] font-bold">
                Recipe App Project <br /> Senior Project 
            </p>
        <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={RecipeImg} title='Recipe App' />
        <ProjectItem img={SeniorImg} title='Senior Project' />
        </div>
        
        </div>
        );
    }

export default Projects;
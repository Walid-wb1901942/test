import React from 'react';
import TechItem from './TechItem';
import ReactImg from "../assets/react_128.png";
import ViteImg from "../assets/vite_128.png"
import GitImage from "../assets/Github_128.png"
import TailwindImg from "../assets/tailwindcss_128.png";
import HtmlCssImg from "../assets/html_css_128.png";
const Tech = () => {
  return (
    <div id="technology" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className="text-4xl font-bold text-center text-[#001b5e] py-16">Technology</h1>
    <div className='sm:flex flex-row justify-around grid grid-cols-3 '>
    <TechItem img={ReactImg} title='React' />
    <TechItem img={TailwindImg} title='Tailwind CSS' />
    <TechItem img={ViteImg} title='Vite' />
    <TechItem img={GitImage} title='Github' />
    <TechItem img={HtmlCssImg} title='HTML/CSS' />
    </div>
    </div>
  );
}

export default Tech;
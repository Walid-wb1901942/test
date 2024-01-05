import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2022,
        title: "Qatar Computing Research Institute",
        subtitle: "Data Scientist Intern",
        duration: "1 Month",
        details:" Contributed to machine learning projects as a Research Assistant during the FIFA World Cup 2022 in Qatar. Developed machine learning pipelines and implemented encoding schemes to optimize data processing and analysis. Collaborated closely with a team of researchers andexperts to identify and implement efficient machinelearning algorithms.",
    }
]
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
                {data.map((item,idx) => (
                    <WorkItem
                    key = {idx}
                        year={item.year}
                        title={item.title}
                        subtitle={item.subtitle}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}

        </div>
    );
    };

export default Work;
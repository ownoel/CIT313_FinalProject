/** @format */
import '../App.css';
import Accordion from "../components/Accordion.js";
import accordionData from "../accordionData.js";

function About() {
    return (
    <>
    <div className="flex flex-col min-h-screen">
        {accordionData.map((item, index) => (
            <Accordion
                key={index}
                title={item.title}
                content={item.content}
            />
        ))}
    </div>
    </>
    )
};

export default About;
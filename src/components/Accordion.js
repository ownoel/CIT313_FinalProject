import { useState } from "react";
import "../App.css"

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-neutral-900">
        <button
          className="w-full text-center py-4 px-6 text-2xl font-medium text-neutral-950 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </button>
        {isOpen && <div className="px-6 pb-4 text-lg text-neutral-950">{content}</div>}
      </div>
    );
  };
  
export default Accordion;
  
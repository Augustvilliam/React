import React, { useState } from 'react';

const AccordionItem = ({ item }) => {
  const [selected, setSelected] = useState(false);
  
  const toggle = () => {
    setSelected(prevSelected => !prevSelected);
  };
  
  return (   
    <div className={selected ? "faq faq-expanded box-sdw" : "faq box-sdw"}>
      <div className="question" onClick={toggle}>
        <span>{item.title}</span>
        <a aria-label="accordion button" className="btn-round-acordion">
            <i className="fa-solid fa-chevron-up"></i>
        </a>
      </div>
      {selected && <div className="answer">{item.content}</div>}
    </div>
  );
};

export default AccordionItem;

//Tillsnyggat med CHATGPT
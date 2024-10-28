import React from 'react'


const AcordionItem = ({item}) => {
  return (
   
        <div className="faq box-sdw">
            <div className="question">
                <span>{item.title}</span>
                <a aria-label="acordion button" className="btn-round-acordion ">
                    <i className="fa-solid fa-chevron-up"></i>
                </a>
            </div>
            <div className="answer">{item.content}</div>
        </div>
   
  )
}

export default AcordionItem
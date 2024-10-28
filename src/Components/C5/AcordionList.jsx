import React, {useState, useEffect} from 'react'
import AcordionItem from './AcordionItem'

const AcordionList = () => {
    const [AcordionItems, setAcordionItems] = useState ([])
    
    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAcordionItems(data)
    } 

    useEffect(() => {
        fetchData()
    }, [])
  
    return (
        <div className="acordion-container">
            {
              AcordionItems.map((item) => (<AcordionItem key={item.id} item={item} />))
            }
        </div>
  )
}

export default AcordionList
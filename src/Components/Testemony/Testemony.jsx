import React, {useState, useEffect} from 'react'
import TestemonyItems from './TestemonyItems'

const Testemony = () => {
    const [TestemonyItem, setTestemonyItem] = useState ([])
    
    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestemonyItem(data)
    } 

    useEffect(() => {
        fetchData()
    }, [])
  
    return (
      <div className="c4-5 bg-primary ">
            <div className="Soc-med-review container">
                <h1>Clients are <br/> Loving Our App</h1>
                <div className="review-container">
                  {
                    TestemonyItem.map((item) =>  (<TestemonyItems key={item.id} item={item} />))
                  }
                </div>
            </div>
      </div>
  )
}

export default Testemony



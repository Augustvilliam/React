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
      <div className="c4-5 bg-primary">
            <div className="Soc-med-review">
                <h1>Clients are loving our app</h1>
                <div className="review-img">
                  {
                    TestemonyItem.map((item) =>  (<TestemonyItems key={item.id} item={item} />))
                  }
                </div>
            </div>
      </div>
  )
}

export default Testemony
// import React, {useState, useEffect} from 'react'
// import TestemonyItems from './TestemonyItems'

// const Testemony =() => {

// const [TestemonyItems, setTestemonyItems] = useState ([])

// const fetchData = async () => {
//   const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
//   const data = await res.json()
//   setTestemonyItems(data)
// }

// useEffect(() =>  {
//   fetchData()
// }, [])

//   return (
//       <div className="c4-5 bg-primary">
//             <div className="Soc-med-review">
//                 <h1>Clients are loving our app</h1>
//                 <div className="review-img">
//                   {
//                     TestemonyItems.map((item) =>  (<TestemonyItems key={item.id} item={item} />))
//                   }
//                 </div>
//             </div>
//       </div>
//   )
// }

// export default Testemony


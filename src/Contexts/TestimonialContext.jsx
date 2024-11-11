import React, {createContext, useState, useEffect} from "react";
export const  TestimonialContext = createContext()
export const TestimonailProvider = ({children}) => {
    const [testimonials, setTestimonials] = useState([])

    const fetchData =async () => {
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    };

    useEffect(() => {
    fetchData()
    }, [])
    return (
        <TestimonialContext.Provider value={{testimonials}}>
            {children}
        </TestimonialContext.Provider>
    )
}

//struktur med chatGPT
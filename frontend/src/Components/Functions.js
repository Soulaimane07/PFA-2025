import axios from "axios"
import { backendURL } from "./Variables"
import { useState } from "react"
import { useEffect } from "react"

export const GetChartsData = () =>{
    const [data, setData] = useState(null)

    useEffect(()=> {
        axios.get(`${backendURL}/charts`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, [])
        
    return data
}
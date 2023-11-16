import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Bircart from './Bircart'

function Loading() {
    const [data, setData] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)
    const getbunuyazanakimi = async () => {
        const res = await axios.get("http://localhost:3000/bununYazanaKimiOldum")
        setData(res.data)
        // setIsLoading(false)
    }
    useEffect(() => {
        getbunuyazanakimi()
    }, [])
    return (
        <>
            <div>Louding</div>
            <div>
            {data && data.map((x) => (
                <Bircart data={x}></Bircart>
                ))}
                
            </div>
        </>

    )
}

export default Loading
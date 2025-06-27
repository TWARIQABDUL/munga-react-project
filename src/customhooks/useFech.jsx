import React, { useEffect, useState } from 'react'

const useFech = (url) => {
    const [data,setData]=useState(
        {
        humidity: '',
        curently: '',
        temp: ''
    }
    )
    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong here");
                }
                // console.log(response);
                return response.json()
            })
            .then(respo => {
                // console.log(respo.main.humidity);
                return setData({
                    humidity: respo.main.humidity,
                    curently: 'suny',
                    temp: Math.round(respo.main.temp)
                })
                // console.log(respo.main);

            })
            
    }, [])
    return data
}

export default useFech
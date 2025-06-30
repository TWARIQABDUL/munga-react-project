import React, { useEffect, useState } from 'react'
import dest1 from '/assets/dest1.png'
import ModalPopUp from '../components/ModalPopUp'
import useFech from '../customhooks/useFech'
function DestinationCard({ aboutCity,itemKey }) {
    const [preview, showPreview] = useState(false)
    const my_hook = useFech(`https://api.openweathermap.org/data/2.5/weather?q=${aboutCity.location}&appid=d84e490083cc222cddc06eaa7e8119f6`)
    // console.log(itemKey);
    
    // const [weaterInfo, setWeatherInfo] = useState({
    //     humidity: '',
    //     curently: '',
    //     temp: ''
    // })
    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${aboutCity.location}&appid=d84e490083cc222cddc06eaa7e8119f6`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Something went wrong here");
    //             }
    //             // console.log(response);
    //             return response.json()
    //         })
    //         .then(respo => {
    //             console.log(respo.main.humidity);

    //             setWeatherInfo({
    //                 humidity: respo.main.humidity,
    //                 curently: 'suny',
    //                 temp: Math.round(respo.main.temp)
    //             })
    //             // console.log(respo.main);

    //         })
    // }, [])
    const controlModal = () => {
        showPreview(!preview)
        // console.log(id);
        
    }

        ;

    return (
        <>
            <div className="card" data-location="Kigali" onClick={controlModal}>
                <img src={aboutCity.icon} />
                <div className="destination-info">
                    <p>{aboutCity.location}<span>{aboutCity.price}</span></p>
                    <p>Humidity<span>{my_hook.humidity} 🌡</span></p>
                    <p>Curentntly<span>{my_hook.curently}☀</span></p>
                    <p>temp<span>{my_hook.temp} 🌡</span></p>
                </div>
            </div>
            {preview && <ModalPopUp controlModal={controlModal} itemKey={itemKey} />}
        </>
    )
}

export default DestinationCard
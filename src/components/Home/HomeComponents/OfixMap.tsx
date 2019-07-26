import React from 'react';
interface MapInfo {
    name: string
    google: any
}

const style = {
    width: '400px',
    height: '300px'
}
const OfixMap = () => {
    // const [selectedPlace, setSelectedPlace] = useState({ name: 'Ofix' });
    return (
        <>
            <div className="w-100 embebed-map">
                
            <iframe name="gMap" src={`https://www.google.com/maps/embed/v1/place?q=${6.238882},${-75.600769}&key=${"AIzaSyAj3p-qEHSQrt-2SMP4mnGxwm_wsI5Y7C0"}`}></iframe>

            </div>
        </>
    )
}


export default OfixMap


import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
                {/* <Map google={props.google} zoom={14} style={style} initialCenter={{ lat: 6.2385993, lng:  -75.6030217 }}>

                    <InfoWindow >
                        <div>
                            <h4>Ofix</h4>
                        </div>
                    </InfoWindow>
                </Map> */}
                      <iframe name="gMap" src={`https://www.google.com/maps/embed/v1/place?q=${6.2385993},${ -75.6030217}&key=${"AIzaSyAj3p-qEHSQrt-2SMP4mnGxwm_wsI5Y7C0"}`}></iframe>

            </div>
        </>
    )
}


export default OfixMap

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyAiXtIEpnjFD_nk7U0RXwKm_6d5is8llQI")
// })(OfixMap)
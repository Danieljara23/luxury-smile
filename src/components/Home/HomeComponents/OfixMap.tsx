import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = (lat:any,lng:any, text:any ) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

const OfixMap = () => {
    const defaultCenter = {lat: 59.95, lng: 30.33};
    const defaultZoom = 11;
    return(
        <GoogleMapReact
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <AnyReactComponent 
          lat={59.955413} 
          lng={30.337844} 
          text={'Kreyser Avrora'} 
        />
      </GoogleMapReact>
    )
}

export default OfixMap
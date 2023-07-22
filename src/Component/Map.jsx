import React from 'react'
import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { useMemo, useEffect, useState } from "react";


const libraries = ["places"]
const mapContainerStyle = {
  width: "100%",
  height: "80vh",
}
const options= {
//   styles: mapStyles,
  disableDefaultUI: false,
  
  Marker: true
}
const Googlemap = () => {

  

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyByQ_yBS39mHWCUooITp2we0pnwtgWNAXA",
      });
      const center = useMemo(() => ({ lat: 6.459964, lng: 7.548949 }),libraries, ["places"]);

  return (
     <div className="">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={options}
          // onChange={""}
          // onChildClick={""}
        >
          <Marker position={center}/>
          </GoogleMap>
      )}
      
    </div>
  )
}

export default Googlemap
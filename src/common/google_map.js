
import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Maps() {



    const containerStyle = {
        "width": '100%',
        "height": '280px'
    };
    const center = {
        lat: 14.04664181701892, lng: -87.18880655738896
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDaXyX_LvkVMSM0xId6uJIwqfu-Euw-gYA">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                    name: 'Platino Motors',
                    lat: parseFloat(center.lat),
                    lng: parseFloat(center.lng),

                }}
                zoom={17}>
                <Marker
                    key={2}
                    position={{
                        name: "Platino Motors",
                        lat: parseFloat(center.lat),
                        lng: parseFloat(center.lng),
                    }}>
                </Marker>

            </GoogleMap>
        </LoadScript>
    )

}

export default Maps;
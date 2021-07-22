import React from "react";
import GoogleMapReact from "google-map-react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function BOEMap() {
  const defaultProps = {
    center: {
      lat: 32.98554934110288,
      lng: -96.82769503814679,
    },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "55vh", width: "95%", margin:'auto' }}
    className="shadow-3-strong mt-4"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCKQ0ekrgCFx7DyW1FAhBEeWITgssH8RXs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MDBIcon
          size="3x"
          icon="map-marker-alt"
          style={{ color: "#215732" }}
          lat={32.98554934110288}
          lng={-96.82769503814679}
        />
      </GoogleMapReact>
    </div>
  );
}

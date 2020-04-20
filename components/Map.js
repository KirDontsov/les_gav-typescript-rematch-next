import React from "react";
import { Map, Placemark } from "react-yandex-maps";

const MyMap = () => (
  <Map
    width="100%"
    height="60vh"
    defaultState={{
      center: [44.658318, 37.687247],
      zoom: 14,
      controls: ["zoomControl", "fullscreenControl"]
    }}
    modules={["control.ZoomControl", "control.FullscreenControl"]}
    instanceRef={ref => {
      ref && ref.behaviors.disable("scrollZoom");
    }}
  >
    <Placemark
      geometry={[44.658318, 37.687247]}
      options={{ iconColor: "#4ca376" }}
    />
  </Map>
);

export default MyMap;

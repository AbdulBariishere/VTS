import React  from 'react';
import { TileLayer } from "react-leaflet";
const Tilelayer = (props) => {
    console.log(props.style);
    return (
        <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2h1c2gtbWl6YWFqIiwiYSI6ImNrNmhrdTdhZTBoejAzZHA4OWpmN2R6eXAifQ.n6lmxR4SjULDk0hrMjpfTQ"
      />
    );
};
 
export default Tilelayer ;
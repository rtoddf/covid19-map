import React from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CovidMap.css';
// import { Layer } from 'leaflet';

const CovidMap = ({countries}) => {
  const mapStyles = {
    fillColor: 'white',
    weight: 1,
    color: 'black',
    fillOpacity: 1
  }

  // takes two params - feature and layer
  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;

    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    
    layer.bindPopup(`${name} ${confirmedText}`)
  }

  return ( <Map style={{height: '90vh'}} zoom={2} center={[20,100]}>
    <GeoJSON style={mapStyles} data={countries} onEachFeature={onEachCountry} />
  </Map> );
}
 
export default CovidMap;
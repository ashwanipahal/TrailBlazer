import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [26, 42],
  iconAnchor: [13, 42],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MyMarker = (props) => {
  const marker = useRef();
  useEffect(() => {
    marker.current.openPopup();
  },[]);
  return <Marker ref={marker} {...props} />;
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MapView = (props) => {
  let { mapData, getMapData } = props;
  let query = useQuery();
  let seat = query.get('location');
  useEffect(() => {
    getMapData(seat);
  },[]);
  const position = mapData.length && mapData[seat] || [0,0];
  return (
    <MapContainer className='map-view' center={position} zoom={2} minZoom={1} maxZoom={3} scrollWheelZoom={false}>
      <TileLayer
        bounds={[
          [-90, -180],
          [90, 180],
        ]}
        noWrap={true}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='map_images/{z}/tile_{x}_{y}.png'
      />
      <MyMarker position={position}>
        <Popup>{seat}</Popup>
      </MyMarker>
    </MapContainer>
  );
};

export default MapView;

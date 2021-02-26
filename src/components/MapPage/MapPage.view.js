import React, { useEffect, useRef } from 'react';
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
  });
  return <Marker ref={marker} {...props} />;
};

const MapView = (props) => {
  let { seatData: { position, seatNumber  } } = props;
  position = position && position.toJS() || [0,0];
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
        <Popup>{seatNumber}</Popup>
      </MyMarker>
    </MapContainer>
  );
};

export default MapView;

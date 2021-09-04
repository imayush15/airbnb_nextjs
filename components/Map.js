import { getCenter } from 'geolib';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState('');

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/imayush15/ckt61qp0b0zxl17nsbmif3pc0'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}>
      {searchResults.map(({ long, lat, title, img }, index) => (
        <div key={index}>
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}>
            <p
              onClick={() => setSelectedLocation(title)}
              className='cursor-pointer text-2xl animate-bounce '>
              📍
            </p>
          </Marker>
          {selectedLocation === title && (
            <Popup
              closeOnClick
              onClose={() => setSelectedLocation('')}
              latitude={lat}
              longitude={long}>
              <div className='flex flex-col items-center z-100 '>
                <img className='w-60 h-60' src={img} alt={title} />
                <p className='text-xs font-semibold mt-2'> {title} </p>
              </div>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

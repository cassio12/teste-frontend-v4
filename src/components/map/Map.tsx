import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { LocationState } from '../../state/equipmentsLocations/equipLocation';

interface Coordenadas {
  lat: number,
  lng: number
}

interface Properties {
  isLoaded: boolean
}

const containerStyle = {
  width: '800px',
  height: '600px',
  object: 'fill'
};

const center = {
  lat: -19.126536,
  lng: -45.947756
}

function Map({ isLoaded }: Properties) {
  const [locations, setLocations] = useState<LocationState>(useSelector((state: RootState)=> state.locations))
  const [coodenadas, setCoodenadas] = useState<Coordenadas[]>([{lat: 2234, lng: 4234}])
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map:any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

  useEffect(()=>{
      let coordenada: Coordenadas[] = []
      for(let i = 0; i < locations.locations.length; i++) {
        coordenada.push({lat: locations.locations[i].positions[i].lat, lng: locations.locations[i].positions[i].lon})
                
        return setCoodenadas(coordenada)

      }
  },[])

  return isLoaded ? (
    <div className='flex justify-center w-full h-full'>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >                            
        {
          coodenadas.map((item,index) => 
            (
              <>
              <Marker key={index} position={item}>
              </Marker>
              </>
            )
          )
        }

      </GoogleMap>
    </div>
  ) : <></>
}

export default Map
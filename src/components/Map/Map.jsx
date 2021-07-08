import React, { useState } from 'react'
import MapGL, { Layer, GeolocateControl, NavigationControl, ScaleControl } from 'react-map-gl'

import { Modal } from '../Modal'

const Map = ({ data, token }) => {
    const [viewport, setViewport] = useState({
        latitude: 41.3,
        longitude: 74.65086,
        zoom: 6,
    })

    const [selected, setSelected] = useState('')
    const [mapLoaded, setMapLoaded] = useState(false)

    const coloredLayer = {
        id: 'colored',
        type: 'fill',
        source: 'districts',
        paint: {
            'fill-outline-color': '#ddd',
            'fill-color': '#22bd27',
            'fill-opacity': 0.45,
        },
        filter: ['all', ['==', 'title_ru', selected]],
    }

    const onViewportChange = next => setViewport(next)

    const onLoad = e => {
        const map = e.target
        map.addSource('districts', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: data,
            },
        })
        map.addLayer({
            id: 'districts',
            type: 'fill',
            source: 'districts', // reference the data source
            layout: {},
            paint: {
                'fill-color': '#e9bb23', // blue color fill
                'fill-opacity': 0.5,
            },
        })
        map.addLayer({
            id: 'outline',
            type: 'line',
            source: 'districts',
            layout: {},
            paint: {
                'line-color': '#f25e5e',
                'line-width': 2,
            },
        })

        map.addLayer({
            id: 'titles',
            type: 'symbol',
            source: 'districts',
            layout: {
                'text-field': ['get', 'title_ru'],
                'text-size': 14,
            },
            paint: {
                'text-color': '#fff',
                'text-halo-color': '#f1f1f1',
                'text-halo-width': 0.3,
            },
        })

        setMapLoaded(true)
    }

    const onClick = e => {
        if (!e.features[0]?.properties.title_ru) return
        setSelected(e.features[0].properties.title_ru)
        setViewport(() => ({
            transitionDuration: 300,
            longitude: e.features[0].properties.position_lng + 1.2,
            latitude: e.features[0].properties.position_lat,
            zoom: e.features[0].properties.zoom,
            bearing: e.features[0].properties.bearing,
        }))
    }

    return (
        <>
            <MapGL
                {...viewport}
                width='100vw'
                height='100vh'
                onLoad={onLoad}
                onClick={onClick}
                minZoom={6.5}
                maxZoom={10}
                mapboxApiAccessToken={token}
                onViewportChange={onViewportChange}
                mapStyle={'mapbox://styles/mapbox/streets-v11'}
            >

                {mapLoaded && <Layer beforeId={'outline'} {...coloredLayer} />}
                <GeolocateControl
                    style={{ right: 10, bottom: 120 }}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
                <NavigationControl style={{ right: 10, bottom: 30 }} />
                <ScaleControl style={{ left: 10, bottom: 30 }} />
            </MapGL>
            {selected && <Modal
                    title={selected}
                    setViewport={setViewport}
                    setSelected={setSelected}
                />}
        </>
    )
}

export { Map }

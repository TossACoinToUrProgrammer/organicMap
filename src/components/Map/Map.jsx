import React from "react"
import MapGL, { Layer } from "react-map-gl"
import {useState } from "react"

import RegionTitles from "./RegionTitles/RegionTitles"

const Map = ({data, token}) => {
  const [viewport, setViewport] = useState({
    latitude: 41.54556,
    longitude: 74.65086,
    zoom: 6,
  })

  const [selected, setSelected] = useState("")
  let [mapLoaded, setMapLoaded] = useState(false)

  const coloredLayer = {
    id: "colored",
    type: "fill",
    source: "districts",
    paint: {
      "fill-outline-color": "#ddd",
      "fill-color": "#22bd27",
      "fill-opacity": 0.45,
    },
    filter: ["all", ["==", "title_ru", selected]],
  }

  const onViewportChange = (next) => setViewport(next)

  const onLoad = (e) => {
    const map = e.target
    map.addSource("districts", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: data,
      },
    })
    map.addLayer({
      id: "districts",
      type: "fill",
      source: "districts", // reference the data source
      layout: {},
      paint: {
        "fill-color": "#e9bb23", // blue color fill
        "fill-opacity": 0.5,
      },
    })
    map.addLayer({
      id: "outline",
      type: "line",
      source: "districts",
      layout: {},
      paint: {
        "line-color": "#f25e5e",
        "line-width": 2,
      },
    })

    setMapLoaded(true)
  }

  const onClick = (e) => {
    if (!e.features[0]?.properties.title_ru) return
    setSelected(e.features[0].properties.title_ru)
    setViewport((prev) => ({
      ...prev,
      transitionDuration: 600,
      longitude: e.features[0].properties.position_lng,
      latitude: e.features[0].properties.position_lat,
      zoom: e.features[0].properties.zoom,
    }))
  }

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      onLoad={onLoad}
      onClick={onClick}
      minZoom={6.5}
      mapboxApiAccessToken={token}
      onViewportChange={onViewportChange}
    >
      {mapLoaded && (
        <>
          <RegionTitles districts={data} />
          <Layer beforeId={"outline"} {...coloredLayer} />
        </>
      )}
    </MapGL>
  )
}

export default Map

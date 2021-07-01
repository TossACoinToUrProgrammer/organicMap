import React from "react"
import { Marker } from "react-map-gl"
import css from "./RegionTitle.module.css"

const RegionTitle = ({ title, lat, lng }) => {
  return (
    <Marker key={title} latitude={lat} longitude={lng}>
      <div className={css["marker-container"]}>
        <div className={css["marker"]}>{title}</div>
      </div>
    </Marker>
  )
}

export default RegionTitle

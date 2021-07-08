import React from 'react'
import { RegionTitle } from './RegionTitle'

const RegionTitles = ({ districts }) => {
    return (
        <>
            {districts.map(({ properties: props }) => {
                if (props.positions)
                    return props.positions.map(
                        ({ position_lat, position_lng }, index) => (
                            <RegionTitle
                                key={props.title_ru + index}
                                title={props.title_ru}
                                lat={position_lat}
                                lng={position_lng}
                            />
                        )
                    )
                else {
                    const { position_lat, position_lng, title_ru } = props
                    return (
                        <RegionTitle
                            key={title_ru}
                            title={title_ru}
                            lat={position_lat}
                            lng={position_lng}
                        />
                    )
                }
            })}
        </>
    )
}

export { RegionTitles }

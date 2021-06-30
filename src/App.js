import React from 'react'
import Map from './Map/Map'
import districts from './districts.json'

const App = () => {
    const token = "pk.eyJ1IjoiYXJsZXBoZW4iLCJhIjoiY2txNjNzNWNzMTlkdjJ2bzBsbndiMTJsZiJ9.YZyYcVhsdiiK7530dMyFfg"
    return (
        <><Map data={districts} token={token} /></>
    )
}

export { App }

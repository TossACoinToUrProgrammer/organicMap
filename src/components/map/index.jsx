import React, { useEffect, useState } from 'react'
import ReactMapGL from 'react-map-gl'
import { firestore } from '../../index'

const Map = () => {

    const [token, setToken] = useState('')

    useEffect(() => {
        const fetchToken = async () => {
            const response = firestore.collection('firebase-config')

            const data = await response.get()
            
            setToken(data.docs[0].data().token)
        }

        fetchToken()
    }, [])

    const [viewport, setViewport] = useState({
        latitude: 41.5,
        longitude: 74.3829,
        zoom: 6,
        width: '100%',
        height: '100vh'
    })

    if (!token) return <div></div>

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={token}
            onViewportChange={viewport => setViewport(viewport)}
            mapStyle='mapbox://styles/mapbox/outdoors-v11'
        >

        </ReactMapGL>
    )
}

export { Map }
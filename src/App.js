import React, { useEffect, useState } from 'react'

import districts from './districts.json'

import { firestore } from './index'

import Map from './components/Map/Map'
import { Preloader } from './components/Preloader/index.jsx'

const App = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const fetchToken = async () => {
            const response = firestore.collection('firebase-config')

            const data = await response.get()

            setToken(data.docs[0].data().token)
        }

        fetchToken()
    }, [])

    if (!token) return <Preloader />

    return (
        <Map data={districts} token={token} />
    )
}

export { App }

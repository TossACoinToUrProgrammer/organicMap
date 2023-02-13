import React, { useEffect, useState } from "react"

import districts from "./districts.json"

import Map from "./components/Map/Map"
import { Preloader } from "./components/Preloader/index.jsx"

const App = () => {
  const [token, setToken] = useState("")

  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = "pk.eyJ1IjoiYXJsZXBoZW4iLCJhIjoiY2txNjNzNWNzMTlkdjJ2bzBsbndiMTJsZiJ9.YZyYcVhsdiiK7530dMyFfg"

      setToken(fetchedToken)
    }

    fetchToken()
  }, [])

  console.log("token:", token)
  if (!token) return <Preloader />

  return <Map data={districts} token={token} />
}

export { App }

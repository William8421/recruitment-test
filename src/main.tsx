import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// import "./index.css"
import './styles/Main.scss'

// ! Terrible workaround for deprecated mapbox lib
// ! See explanation here: https://github.com/alex3165/react-mapbox-gl/issues/822#issuecomment-1076315575
import * as mapboxgl from "mapbox-gl"
const accessToken =
  "pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg"
//@ts-ignore
Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(accessToken)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

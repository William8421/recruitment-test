import "mapbox-gl/dist/mapbox-gl.css"

import { Map as _ReactMapboxGl} from "react-mapbox-gl"
import MarkerComponent from "./MarkerComponent"

const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [3, 40],
  [16, 56],
]

const ReactMapboxGl = _ReactMapboxGl({} as any)

const Map = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>
}) => (
  <ReactMapboxGl
    style="mapbox://styles/mapbox/streets-v11"
    fitBounds={GERMANY_BOUNDS}
    containerStyle={{ width: "100%", height: "100%" }}
  >
    {children = <MarkerComponent/>}
    
  </ReactMapboxGl>
)

export default Map

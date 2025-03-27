import {GeoData} from "./weather.types.ts";

interface GeoItemProps {
    data: GeoData
}

export function GeoItem(props: GeoItemProps){
    return <p style={{color: "red"}}>{props.data.name}, {props.data.country}</p>
}
import axios from "axios";
import {GeoData} from "./weather.types.ts";

export async function getWeather(){
    const response = await axios.get<GeoData[]>('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=4853579cc7c889f892e05112316c7a38')
    return response.data
}
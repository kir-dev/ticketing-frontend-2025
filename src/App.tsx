import './App.css'
import {GeoItem} from "./geo-data.tsx";
import {useWeather} from "./use-weather.ts";

function App() {
    const weather = useWeather()

    if(weather.isLoading) return <p>Loading...</p>;

    if(weather.error) return <p>{weather.error.message}</p>;

    if(!weather.data) return null

    return <main>
        <h1>Weather</h1>
        {weather.data.map((c)=><GeoItem key={c.name} data={c}/>)}
    </main>
}















export default App

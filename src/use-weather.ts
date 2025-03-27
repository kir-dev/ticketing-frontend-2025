import {useQuery} from "@tanstack/react-query";
import {getWeather} from "./weather.service.ts";

export function useWeather() {
    return useQuery({
        queryKey: ["weather"],
        queryFn: getWeather
    })
}
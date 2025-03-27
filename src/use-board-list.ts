import {useQuery} from "@tanstack/react-query";
import {getBoardList} from "./board.service.ts";

export function useBoardList(){
    return useQuery({
        queryKey: ["board"],
        queryFn: getBoardList,
    })
}
import {useMutation} from "@tanstack/react-query";
import {createBoard} from "./board.api.ts";

export function useCreateBoard(){
    return useMutation({
        mutationFn: createBoard
    })
}
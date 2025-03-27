import {useMutation} from "@tanstack/react-query";
import {deleteBoard} from "./board.api.ts";

export function useDeleteBoard(id:number){
    return useMutation({
        mutationFn: ()=>deleteBoard(id)
    })
}
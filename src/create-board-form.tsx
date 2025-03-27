import {Button, HStack, Input} from "@chakra-ui/react";
import {useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {CreateBoardDto} from "./board.types.ts";
import {useCreateBoard} from "./use-create-board.ts";

export function CreateBoardForm(){
    const form = useForm<CreateBoardDto>()
    const queryClient = useQueryClient()
    const createBoardMutation = useCreateBoard()

    const onSubmit = form.handleSubmit(async (data)=>{
            await createBoardMutation.mutateAsync(data)
            form.reset()
            await queryClient.invalidateQueries({
                queryKey: ["board"]
            })
        }
    )

    return <HStack>
        <form onSubmit={onSubmit}>
            <Input {...form.register("title")}/>
            <Button loading={createBoardMutation.isPending} type="submit">Add Board</Button>
        </form>
    </HStack>
}
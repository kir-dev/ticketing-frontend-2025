import {Card, IconButton} from "@chakra-ui/react";
import {useQueryClient} from "@tanstack/react-query";
import {TbTrash} from "react-icons/tb";
import {BoardViewModel} from "./board.types.ts";
import {useDeleteBoard} from "./use-delete-board.ts";

interface BoardListItemProps {
    board: BoardViewModel
}

export function BoardListItem({board}: BoardListItemProps){
    const deleteBoard = useDeleteBoard(board.id)
    const queryClient = useQueryClient()

    const onDeleteBoard = async ()=>{
        await deleteBoard.mutateAsync()
        await queryClient.invalidateQueries({
            queryKey: ["board"]
        })
    }

    return <Card.Root>
        <Card.Header>
            <Card.Title>{board.title}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Description>{board.createdAt.toLocaleString("hu")}</Card.Description>
        </Card.Body>
        <Card.Footer>
            <IconButton loading={deleteBoard.isPending} onClick={onDeleteBoard} size="sm" colorPalette="red" variant="outline">
                <TbTrash/>
            </IconButton>
        </Card.Footer>
    </Card.Root>
}
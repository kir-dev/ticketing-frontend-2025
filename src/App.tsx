import './App.css'
import {Text, VStack} from "@chakra-ui/react";
import {BoardListItem} from "./board-list-item.tsx";
import {CreateBoardForm} from "./create-board-form.tsx";
import {useBoardList} from "./use-board-list.ts";

function App() {
    const boardListQuery = useBoardList()

    return <main>
        <VStack>
            <Text textStyle="2xl">Boards</Text>
            <CreateBoardForm/>
            {boardListQuery.data?.map(item=>
                <BoardListItem
                    key={item.id}
                    board={item}
                />
            )}
        </VStack>
    </main>
}















export default App

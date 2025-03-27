import {getBoardListData} from "./board.api.ts";
import {BoardViewModel} from "./board.types.ts";

export async function getBoardList(): Promise<BoardViewModel[]>{
    const data = await getBoardListData()

    data.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    return data.map<BoardViewModel>((item)=>{
        return {
            ...item,
            createdAt: new Date(item.createdAt)
        }
    });
}
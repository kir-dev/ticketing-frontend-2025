import axios from "axios";
import {BoardDto, CreateBoardDto} from "./board.types.ts";

export async function getBoardListData(): Promise<BoardDto[]> {
    const response = await axios.get<BoardDto[]>("http://bujdi.sch.bme.hu:3000/boards")
    return response.data;
}

export async function createBoard(data: CreateBoardDto){
    const response = await axios.post<BoardDto>("http://bujdi.sch.bme.hu:3000/boards", data)
    return response.data;
}

export async function deleteBoard(id: number){
    const response = await axios.delete("http://bujdi.sch.bme.hu:3000/boards/" + id)
    return response.data;
}
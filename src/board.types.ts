export type BoardDto = {
    id: number;
    title: string;
    createdAt: string;
}

export type BoardViewModel = {
    id: number;
    title: string;
    createdAt: Date
}

export type CreateBoardDto = {
    title: string
}
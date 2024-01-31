import { Container } from "@mui/material";
import AppBar from "@/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "@/apis/mock-data";
import { useEffect, useState } from "react";
import { fetchBoardDetailApi } from "@/apis";

function Board() {
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const boardId = "65b9c46dc4e6bd02d3a56f0e";
    fetchBoardDetailApi(boardId).then((res) => setBoard(res));
    console.log("first");
    console.log("board", board);
  }, []);
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: "100vh",
        }}
      >
        <AppBar />
        <BoardBar board={board} />
        <BoardContent board={board} />
      </Container>
    </>
  );
}

export default Board;

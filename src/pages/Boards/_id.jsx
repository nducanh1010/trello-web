import { Container } from "@mui/material";
import AppBar from "@/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "@/apis/mock-data";
import { useEffect, useState } from "react";
import {
  createNewCardApi,
  createNewColumnApi,
  fetchBoardDetailApi
} from "@/apis";
import { isEmpty } from "lodash";
import { generatePlaceholderCard } from "@/utils/formatters";

function Board() {
  const [board, setBoard] = useState(null);
  const boardId = "65b9c46dc4e6bd02d3a56f0e";

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // Khi tao column moi se chua co card
    try {
      const res = await fetchBoardDetailApi(boardId);
      if (res) {
        res.columns.forEach((column) => {
          if (isEmpty(column.cards)) {
            column.cards = [generatePlaceholderCard(column)];
            column.cardOrderIds = [generatePlaceholderCard(column)._id];
          }
        });
        setBoard(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const createNewColumn = async (newColumnData) => {
    const res = await createNewColumnApi({
      boardId: board._id,
      ...newColumnData
    });
    res.cards = [generatePlaceholderCard(res)];
    res.cardOrderIds = [generatePlaceholderCard(res)._id];
    const newBoard = { ...board };
    newBoard.columns.push(res);
    newBoard.columnOrderIds.push(res._id);
    setBoard(newBoard);
  };
  const createNewCard = async (newCardData) => {
    const res = await createNewCardApi({
      boardId: board._id,
      ...newCardData
    });
    const newBoard = { ...board };
    const columnToUpdate = newBoard.columns.find(
      (column) => column._id === res.columnId
    );
    if (columnToUpdate) {
      columnToUpdate.cards.push(res);
      columnToUpdate.cardOrderIds.push(res._id);
    }
    setBoard(newBoard);
  };
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: "100vh"
        }}
      >
        <AppBar />
        <BoardBar board={board} boardId={boardId} />
        <BoardContent
          board={board}
          createNewColumn={createNewColumn}
          createNewCard={createNewCard}
        />
      </Container>
    </>
  );
}

export default Board;

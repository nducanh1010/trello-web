import { Box, CircularProgress, Container, Typography } from "@mui/material";
import AppBar from "@/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "@/apis/mock-data";
import { useEffect, useState } from "react";
import {
  createNewCardApi,
  createNewColumnApi,
  fetchBoardDetailApi,
  updateBoardDetailsApi,
  updateColumnDetailsApi
} from "@/apis";
import { isEmpty } from "lodash";
import { generatePlaceholderCard } from "@/utils/formatters";
import { mapOrder } from "@/utils/sorts";

function Board() {
  const [board, setBoard] = useState(null);
  const boardId = "65b9c46dc4e6bd02d3a56f0e";

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // Khi tao column moi se chua co card
    try {
      const board = await fetchBoardDetailApi(boardId);
      if (board) {
        board.columns = mapOrder(board.columns, board.columnOrderIds, "_id");
        board.columns.forEach((column) => {
          if (isEmpty(column.cards)) {
            column.cards = [generatePlaceholderCard(column)];
            column.cardOrderIds = [generatePlaceholderCard(column)._id];
          } else {
            // sap xep thu tu card truoc khi dua xuong array
            column.cards = mapOrder(column.cards, column.cardOrderIds, "_id")
;
          }
        });
        setBoard(board);
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
  const moveColumn = (dndOrderedColumns) => {
    const dndOrderedColumnIds = dndOrderedColumns.map((c) => c._id); // lưu lại vào db
    const newBoard = { ...board };
    newBoard.columns = dndOrderedColumns;
    newBoard.columnOrderIds = dndOrderedColumnIds;
    setBoard(newBoard);
    updateBoardDetailsApi(newBoard._id, {
      columnOrderIds: dndOrderedColumnIds
    });
  };
  const moveCardSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
    console.log("check", dndOrderedCards, dndOrderedCardIds, columnId);
    const newBoard = { ...board };
    const columnToUpdate = newBoard.columns.find(
      (column) => column._id === columnId
    );
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards;
      columnToUpdate.cardOrderIds = dndOrderedCardIds;
    }
    setBoard(newBoard);
    updateColumnDetailsApi(columnId, { cardOrderIds: dndOrderedCardIds });
  };
  if (!board) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100vw,",
          height: "100vh"
        }}
      >
        <CircularProgress />
        <Typography>Loading Board ...</Typography>
      </Box>
    );
  }
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
          moveColumn={moveColumn}
          createNewColumn={createNewColumn}
          createNewCard={createNewCard}
          moveCardSameColumn={moveCardSameColumn}
        />
      </Container>
    </>
  );
}

export default Board;

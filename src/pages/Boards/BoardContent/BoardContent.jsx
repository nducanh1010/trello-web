import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "@/utils/sorts";

function BoardContent({ board }) {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        p: "10px 0",
      }}
    >
      <ListColumns columns={orderedColumn}></ListColumns>
    </Box>
  );
}

export default BoardContent;

import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "@/utils/sorts";
import {
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

function BoardContent({ board }) {
  const [orderColumns, setOrderColumns] = useState([]);
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  // mouse di chuyen 10x se kich hoat event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  // Nhấn giữ 250ms và dung sai ( di chuyển khoảng 5px sẽ kích hoạt event)
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  useEffect(() => {
    setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    // Nếu over ko tồn tại, return
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = orderColumns.findIndex((c) => c._id === active.id);
      const newIndex = orderColumns.findIndex((c) => c._id === over.id);
      // aray-move sắp xếp lại mảng ban đầu
      const dndOrderedColumns = arrayMove(orderColumns, oldIndex, newIndex);
      const dndOrderedColumnIds = dndOrderedColumns.map((c) => c._id); // lưu lại vào db
      setOrderColumns(dndOrderedColumns);
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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
        <ListColumns columns={orderColumns}></ListColumns>
      </Box>
    </DndContext>
  );
}

export default BoardContent;

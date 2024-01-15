import { Box, Button } from "@mui/material";
import Column from "./Column/Column";
import { NoteAdd } from "@mui/icons-material";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListColumns({ columns }) {
  return (
    <SortableContext
      items={columns?.map((column) => column._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar-track": { m: 0 },
        }}
      >
        {columns?.map((column) => (
          <Column column={column} key={column._id} />
        ))}

        {/* Box ADD New Column */}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2,
            borderRadius: "6px",
            height: "fit-content",
            bgcolor: "#ffffff3d",
          }}
        >
          <Button
            sx={{
              color: "white",
              width: "100%",
              justifyContent: "flex-start",
              pl: 2.5,
              py: 1,
            }}
            startIcon={<NoteAdd />}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListColumns;

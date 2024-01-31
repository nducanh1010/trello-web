import { Box, Button, InputAdornment, TextField } from "@mui/material";
import Column from "./Column/Column";
import { Close, NoteAdd, Search } from "@mui/icons-material";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

function ListColumns({ columns }) {
  const [openNewColForm, setOpenNewColForm] = useState(false);
  const handleOpenForm = () => setOpenNewColForm(!openNewColForm);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const addNewColumn = () => {
    if (!newColumnTitle) return;
    handleOpenForm();
    setNewColumnTitle("");
  };
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
        {!openNewColForm ? (
          <Box
            sx={{
              minWidth: "250px",
              maxWidth: "250px",
              mx: 2,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d",
            }}
          >
            <Button
              onClick={() => handleOpenForm()}
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
        ) : (
          <Box
            onClick={() => addNewColumn()}
            sx={{
              minWidth: "250px",
              maxWidth: "250px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mx: 2,
              p: 1,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d",
            }}
          >
            <TextField
              onChange={(e) => setNewColumnTitle(e.target.value)}
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              // value={search}
              // onChange={(e) => {
              //   setSearch(e.target.value);
              // }}
              label="Enter column title..."
              type="text"
              size="small"
              variant="outlined"
              autoFocus
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  boxShadow: "none",
                  border: "0.5px solid",
                  borderColor: (theme) => theme.palette.success.main,
                  "&:hover": { bgcolor: (theme) => theme.palette.success.main },
                }}
              >
                Add column
              </Button>
              <Close
                onClick={() => handleOpenForm()}
                fontSize="small"
                sx={{
                  color: "white",
                  cursor: "pointer",
                  "&:hover": {
                    color: (theme) => theme.palette.warning.light,
                  },
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  );
}

export default ListColumns;

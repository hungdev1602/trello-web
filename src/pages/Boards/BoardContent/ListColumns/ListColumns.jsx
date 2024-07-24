import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListColumns({ columns }) {
  /*
   * SortableContext yêu cầu items là 1 mảng dạng ["id-1", "id-2"] chứ ko phải [{id: "id-1"}]
   * nếu ko đúng thì vẫn có thể kéo thả nhưng ko có animation
   */
  return (
    <>
      <SortableContext
        items={columns?.map((c) => c._id)} //xử lý SortableContext lấy dạng nguyên thuỷ
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
            "&::-webkit-scrollbar-track": { m: 2 },
          }}
        >
          {columns?.map((column) => (
            <Column key={column._id} column={column} />
          ))}

          {/* Box add new column CTA */}
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
              startIcon={<NoteAddIcon />}
              sx={{
                color: "white",
                width: "100%",
                justifyContent: "flex-start",
                pl: 2.5,
                py: 1,
              }}
            >
              Add new column
            </Button>
          </Box>
        </Box>
      </SortableContext>
    </>
  );
}

export default ListColumns;

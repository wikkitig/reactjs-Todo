import React from "react";
import AddTodo from "./AddTodo";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
function TodoList({ totalList, addTodDo, updateDone, deleteTodo }) {
  const CompletedTodo = (id) => {
    updateDone(id);
  };

  const DeleteTodo = (id) => {
    deleteTodo(id);
  };
  const Todolist_totalData = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    minHeight: "50px",
    boxShadow: "5px 10px 8px 2px #888888",
    marginTop: "60px",
    fontSize: "22px",
  });
  return (
    <>
      <Container sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            height: "20vh",
            backgroundColor: " ",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddTodo addTodDo={addTodDo} />
        </Box>
        <Box>
          {totalList !== undefined
            ? totalList.map((val, index) => (
                <div key={index}>
                  <Todolist_totalData>
                    <Box className="conetent_todo_list">
                      <Box
                        className={val.isDone ? "linethrough" : "linesimple"}
                      >
                        {val.content}
                      </Box>
                    </Box>

                    <Box className="total_actions">
                      <button
                        className="actions_btn"
                        onClick={() => CompletedTodo(index)}
                      >
                        {val.isDone ? (
                          <RemoveDoneIcon sx={{ color: "#4caf50" }} />
                        ) : (
                          <DoneIcon />
                        )}
                      </button>{" "}
                      <button
                        className="actions_btn"
                        onClick={() => DeleteTodo(index)}
                      >
                        <DeleteIcon color="error" />
                      </button>
                    </Box>
                    {/* </button> */}
                  </Todolist_totalData>
                </div>
              ))
            : "no data"}
        </Box>
      </Container>
    </>
  );
}

export default TodoList;

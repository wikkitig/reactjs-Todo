import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddToDo({ addTodDo }) {
  const [content, setContent] = useState("");

  const saveTodo = (e) => {
    e.preventDefault();
    if (!content) {
      toast.error("Enter Todo");
      return false;
    }
    addTodDo(content);
    setContent("");
  };
  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: "white", color: "white" }}
      />
      <Box className="form">
        <Box className="text_field">
          <TextField
            id="standard-basic"
            label="Add Task"
            variant="standard"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* <input type="text" onChange={(e) => setContent(e.target.value)}></input> */}
          {/* <button onClick={saveTodo}>Add</button> */}
        </Box>
        <Box sx={{ marginLeft: "20px" }}>
          <button onClick={saveTodo} className="btn_todo">
            Add ToDo
          </button>
          {/* <Button variant="contained" onClick={saveTodo}>
          Add ToDo
        </Button> */}
        </Box>
      </Box>
    </>
  );
}

export default AddToDo;

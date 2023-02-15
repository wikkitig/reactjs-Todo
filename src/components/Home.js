import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import todo_home from "./todo_home.jpg";
import styled from "@emotion/styled";
function Home() {
  const Styles = styled(Box)({
    backgroundImage: `url(${todo_home})`,
  });
  return (
    <Box className="content">
      <Box className="content_about">
        <h2 className="heading">TODO React</h2>
        <p className="content_body">
          Add your first Todo by clicking button below
        </p>

        <Box>
          <Link to="/todolist" className="btn_todo">
            Add Todo
          </Link>
        </Box>
      </Box>
      <Box className="content_image">
        <img
          src={process.env.PUBLIC_URL + "/images/todos.png"}
          alt="background_image"
          className="content_image_"
        ></img>
      </Box>
    </Box>
  );
}

export default Home;

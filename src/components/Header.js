import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log("tioosd");
  console.log(isMatch);
  console.log("tioosd");
  const navigate = useNavigate();
  const Styled_tool = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const TodoList = () => {
    navigate("/todolist");
  };
  return (
    <Box className="header">
      <AppBar
        position="static"
        sx={{ background: "transparent", elevation: 0, boxShadow: "none" }}
      >
        <Styled_tool>
          <Typography>
            <Link to="/" className="header_links">
              Todo App
            </Link>
          </Typography>
          <Link to="/todolist" className="header_links">
            Todo List
          </Link>
        </Styled_tool>
      </AppBar>
    </Box>
  );
}

export default Header;

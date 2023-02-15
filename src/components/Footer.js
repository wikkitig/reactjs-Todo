import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Box className="footer" sx={{ marginTop: "20px" }}>
      <Link className="links_footer">Github</Link>
    </Box>
  );
}

export default Footer;

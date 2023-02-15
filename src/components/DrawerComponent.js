import React, { useState } from "react";
import { Fragment } from "react";
import { Drawer, List, ListItemButton, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
function DrawerComponent() {
  const [drawer, setDrawer] = useState(false);
  return (
    <Fragment>
      <Drawer open={true} onClose={() => setDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setDrawer(!drawer)}
      >
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
}

export default DrawerComponent;

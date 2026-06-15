import { Group } from "@mui/icons-material";

import { Toolbar,  Box, AppBar,  Typography, Container, MenuItem, MenuList } from "@mui/material";
import { NavLink } from "react-router";

import MenuItemList from "../shared/components/MenuitemList";





export default function NavBar() {
    return (
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: "linear-gradient(135deg, #182873 0%, #218aae 69%,#20a7ac 89%)"}}>
        <Container maxWidth="xl">   
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box> 
            <MenuList>
     <MenuItem component={NavLink} to='/' sx={{display: "flex", gap:2}}>  
            <Group fontSize="large"/> 
       <Typography variant="h6"  sx={{  fontWeight: "bold"}}>
                Reactivities
        </Typography>
            </MenuItem> 
            </MenuList>
       
             </Box>
            <Box>
                <MenuList sx={{ display: "flex", gap: 4 }}>
                <MenuItemList to="/activities">
                    Activities
                </MenuItemList>
                <MenuItemList to="/createActivity">
                    Create Activity
                </MenuItemList>
                  <MenuItem>User Menu</MenuItem>
                </MenuList>
            </Box>
         
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
    )
}
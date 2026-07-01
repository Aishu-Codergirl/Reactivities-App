import { Group } from "@mui/icons-material";

import { Toolbar,  Box, AppBar,  Typography, Container, MenuItem, MenuList, LinearProgress } from "@mui/material";
import { NavLink } from "react-router";

import MenuItemList from "../shared/components/MenuitemList";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";





export default function NavBar() {
    const {uiStore}=useStore();

    return (
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: "linear-gradient(135deg, #182873 0%, #218aae 69%,#20a7ac 89%)",
        position: "relative"
      }}>
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
                  <MenuItemList to="/counter">
                    Counter
                </MenuItemList>
                  <MenuItem>User Menu</MenuItem>
                </MenuList>
                
            </Box>
         
        </Toolbar>
        </Container>

        <Observer>
{
    ()=> uiStore.isLoading ?(
        <LinearProgress color="secondary" sx={{position:"absolute", top:0, left:0, right:0}}/>
    ):null
}


        </Observer>
      </AppBar>
    </Box>
    )
}
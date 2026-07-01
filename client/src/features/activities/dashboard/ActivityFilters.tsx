import { FilterList,Event } from "@mui/icons-material";
import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

export default function ActivityFilters() {     

    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
      gap: 3 }} >
 <Paper sx={{ p: 3, borderRadius: 3 }}>
    <Box sx={{ width:'100%' }}>
        <Typography variant="h6" component="h2" sx={{ display:'flex',alignItems: 'center', mb: 2, color: 'primary.main' }}>
            <FilterList sx={{ mr: 1 }} />
            Filters

        </Typography>
<MenuList >
    <MenuItem>
    <ListItemText primary="All Activities" />
    </MenuItem>
     <MenuItem>
    <ListItemText primary="I'm Going" />
    </MenuItem>
     <MenuItem>
    <ListItemText primary="I'm Hosting" />
    </MenuItem>

</MenuList>


        </Box>
        <Box  sx={{ component:"Paper", p: 3, width: '100%', borderRadius: 3 }}>
            <Typography variant="h6" component="h2" sx={{ display:'flex',alignItems: 'center', mb: 2 ,color: 'primary.main'}}>
                <Event sx={{ mr: 1 }} />
                Select Date
                </Typography>
                <Calendar/>

        </Box>

 </Paper>
      </Box>
    )
}
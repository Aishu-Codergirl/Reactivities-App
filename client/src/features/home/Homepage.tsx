import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Homepage() {

    return(
       <Paper sx={{ color:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',alignContent:'center',height:'100vh',backgroundColor:'primary.main'
          ,backgroundImage: "linear-gradient(135deg, #182873 0%, #218aae 69%,#20a7ac 89%)"  }}>
        <Box sx={{ display: 'flex', flexDirection: 'column',color: 'white',
             alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <Group sx={{height:    110, width: 110, mb: 2 }} />
            <Typography variant="h1">
                Reactivities
            </Typography>
            </Box>
            <Typography variant="h2" component="h2" gutterBottom>
               welcome to Reactivities!
            </Typography>
            <Button component={Link}
            to='/activities' variant="contained" size="large" 
            sx={{ height: 80, borderRadius: 4,fontSize:'1.25rem' }}>
                     Take Me to Reactivities
            </Button>
        
       </Paper>
    )
}
       
 
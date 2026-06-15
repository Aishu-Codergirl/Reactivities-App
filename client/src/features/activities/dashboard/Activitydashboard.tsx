import { Grid} from "@mui/material";
import { ActivityList } from "./ActivityList";






export default function Activitydashboard() {



    return (
   <Grid container spacing={4}>
    <Grid size={7}>
            
     <ActivityList 
    
     />
    </Grid>
     <Grid size={5}>
            
   Activty filters go here 
    </Grid>
 
   </Grid>
    )
}
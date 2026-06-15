import { Box, Button, Card, CardActions, CardContent, Chip, Link, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate } from "react-router";

type Props = {
   activity: Activity;
    
   
}

export function ActivityCard({activity}: Props) {
    const navigate = useNavigate();
const {deleteActivity}=useActivities();

    return (
       <Card sx={{ borderRadius: 2 }}>
        <CardContent>
 <Typography variant="h5" >
          {activity.title}
        </Typography>
             <Typography sx={{color: 'text.secondary' ,mb: 2}} >
          {activity.date}
        </Typography>
            <Typography variant="body2" >
          {activity.description}
        </Typography>
            <Typography variant="subtitle1" >
          {activity.city}/ {activity.venue}
        </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
            <Chip label={activity.category} color="primary" variant="outlined" />
            <Box  sx={{ display: "flex", gap: 2 }}>
 <Button size="medium" variant="contained" color="primary" onClick={() => navigate(`/activities/${activity.id}`)}>
                View
            </Button>
                 <Button size="medium" variant="contained" color="error"
                 disabled={deleteActivity.isPending}
                 
                 onClick={()=> deleteActivity.mutate(activity.id)}>
                Delete
            </Button>
            </Box>
           

        </CardActions>
       
        </Card>
    )
}
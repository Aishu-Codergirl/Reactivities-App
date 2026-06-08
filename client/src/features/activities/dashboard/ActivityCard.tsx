import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";

type Props = {
   activity: Activity;
     selectActivity: (id: string) => void;
     deleteActivity: (id: string) => void;
}

export function ActivityCard({activity, selectActivity, deleteActivity}: Props) {
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
 <Button size="medium" variant="contained" color="primary" onClick={()=> selectActivity(activity.id)}>
                View
            </Button>
                 <Button size="medium" variant="contained" color="error" onClick={()=> deleteActivity(activity.id)}>
                Delete
            </Button>
            </Box>
           

        </CardActions>
       
        </Card>
    )
}
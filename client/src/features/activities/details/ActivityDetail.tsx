import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";


export default function ActivityDetail() {
    const navigate = useNavigate();
    const {id}=useParams();
    const {activity,isLoading}=useActivities(id);

    
if(isLoading) return <Typography variant="h5" align="center">Loading...</Typography>


if(!activity) return <Typography variant="h5" align="center">Activity not found</Typography>

    return (
        <Card sx={{ borderRadius: 3, p: 3 }}>
            <CardMedia
                component="img"
                src={`/images/categoryImages/${activity.category}.jpg`}    
            />
            <CardContent>
                <Typography variant="h5">
                    {activity.title}
                </Typography>
                <Typography sx={{ fontWeight: "light" }} variant="subtitle1">
                    {activity.date}
                </Typography>
                  <Typography variant="body1">
                    {activity.description}
                </Typography>
            </CardContent>
          <CardActions>
            <Button onClick={() => navigate(`/manage/${activity.id}`)} color="primary" variant="contained">
                Edit
            </Button>
               <Button  onClick={() => navigate('/activities')} color="inherit" variant="contained">
                cancel
            </Button>
          </CardActions>
        </Card>
    )
}
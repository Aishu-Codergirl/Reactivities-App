import {  Grid, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import {  useParams } from "react-router";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSidebar from "./ActivityDetailSidebar";


export default function ActivityDetailPage() {

    const {id}=useParams();
    const {activity,isLoading}=useActivities(id);

    
if(isLoading) return <Typography variant="h5" align="center">Loading...</Typography>


if(!activity) return <Typography variant="h5" align="center">Activity not found</Typography>

    return (
  <Grid
  container spacing={3}
  >
    <Grid size={8}>
<ActivityDetailsHeader activity={activity} />
<ActivityDetailInfo activity={activity}  />
<ActivityDetailChat/>
    </Grid>
    <Grid size={4}>
<ActivityDetailSidebar/>
    </Grid>
  </Grid>
    )
}
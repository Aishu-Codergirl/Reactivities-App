import { Grid} from "@mui/material";
import { ActivityList } from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";


type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity: Activity | undefined;
    openForm: (id?: string) => void;
    closeForm: () => void;
    editMode: boolean;

}

export default function Activitydashboard(props: Props) {
    return (
   <Grid container spacing={4}>
    <Grid size={7}>
            
     <ActivityList activities={props.activities}
     selectActivity={props.selectActivity}
    
     />
    </Grid>
     <Grid size={5}>
            
    {props.selectedActivity && !props.editMode && 
      <ActivityDetail selectedActivity={props.selectedActivity} 
        cancelSelectActivity={props.cancelSelectActivity}
        openForm={props.openForm}
      />
    }
    {props.editMode && <ActivityForm  
    closeForm={props.closeForm} activity={props.selectedActivity} />}
    </Grid>
 
   </Grid>
    )
}
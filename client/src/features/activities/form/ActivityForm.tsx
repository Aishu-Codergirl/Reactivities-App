import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";



export default function ActivityForm(){
  const {id}  =useParams();
  const { updateActivity, createActivity , activity ,isLoading}=useActivities(id);
  const navigate = useNavigate();


const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data:{[key: string]: FormDataEntryValue} ={}
  formData.forEach((value, key) => {    data[key] = value;
  })
  if(activity){
    data.id = activity.id;
    await updateActivity.mutateAsync(data as unknown as Activity);
    navigate(`/activities/${activity.id}`);
 
  }
  else{
    await createActivity.mutate(data as unknown as Activity,{
      onSuccess:(id)=>{
        navigate(`/activities/${id}`);
      }
    });
    navigate('/activities');
  }
 

}
if(isLoading) return <Typography variant="h5" align="center">Loading...</Typography>

    return (
      <Paper sx={{ borderRadius: 3, p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          {activity ? "Edit Activity" : "Create Activity"}
        </Typography>
        <Box onSubmit={handleSubmitForm} component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField name="title" label="Title" variant="outlined" fullWidth defaultValue={activity?.title || ""} />
             <TextField name="description" label="Description"  multiline rows={3} defaultValue={activity?.description || ""} />
                <TextField name="category" label="Category"  defaultValue={activity?.category || ""} />
                  <TextField name="date" label="Date" type="date" defaultValue={activity?.date ? new Date(activity.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0] || ""} />
                    <TextField name="city" label="City" defaultValue={activity?.city || ""} />
                      
                       <TextField name="venue" label="Venue" defaultValue={activity?.venue || ""} />
                       <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
<Button color="inherit" variant="outlined"
onClick={()=>{}}>
                          Cancel
                        </Button>
                        <Button  type="submit" color="success" variant="contained"
                        disabled={updateActivity.isPending || createActivity.isPending}>
                         Submit
                        </Button>
                       </Box>
          
          
        </Box>
      </Paper>
    )
}
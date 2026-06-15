import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
type Props = {
    closeForm: () => void;
    activity: Activity | undefined;
 
}


export default function ActivityForm({ closeForm, activity }: Props){
  const { updateActivity, createActivity }=useActivities();

const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data:{[key: string]: FormDataEntryValue} ={}
  formData.forEach((value, key) => {    data[key] = value;
  })
  if(activity){
    data.id = activity.id;
    await updateActivity.mutateAsync(data as unknown as Activity);
    closeForm();
  }
  else{
    await createActivity.mutateAsync(data as unknown as Activity);
    closeForm();
  }
 

}

    return (
      <Paper sx={{ borderRadius: 3, p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
        Create Activity
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
onClick={closeForm}>
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
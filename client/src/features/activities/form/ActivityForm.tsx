import { Box, Button, Paper, TextField, Typography } from "@mui/material";
type Props = {
    closeForm: () => void;
    activity: Activity | undefined;
    submitForm: (activity: Activity) => void;
}


export default function ActivityForm({ closeForm, activity, submitForm }: Props){

const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data:{[key: string]: FormDataEntryValue} ={}
  formData.forEach((value, key) => {    data[key] = value;
  })
  if(activity){
    data.id = activity.id;
  }
 submitForm(data as unknown as Activity);
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
                  <TextField name="date" label="Date" type="date" defaultValue={activity?.date || ""} />
                    <TextField name="city" label="City" defaultValue={activity?.city || ""} />
                       <TextField name="venue" label="Venue" defaultValue={activity?.venue || ""} />
                       <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
<Button color="inherit" variant="outlined"
onClick={closeForm}>
                          Cancel
                        </Button>
                        <Button  type="submit" color="primary" variant="contained">
                         Submit
                        </Button>
                       </Box>
          
          
        </Box>
      </Paper>
    )
}
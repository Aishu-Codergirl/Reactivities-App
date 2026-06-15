
import {    useState } from 'react'

import { Box, Container, CssBaseline, Typography } from '@mui/material';

import NavBar from './NavBar';
import Activitydashboard from '../../features/activities/dashboard/Activitydashboard';

import { useActivities } from '../../lib/hooks/useActivities';

function App() {
 // const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

 /* useEffect(()=>{
    axios.get('https://localhost:5001/api/activities')
  
    .then(response=>setActivities(response.data))

  },[])*/
const {activities, isPending}=useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find(x=>x.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }
  const handleFormOpen = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }
  const handleFormClose = () => {
    setEditMode(false);
  }



  
  return (
    
    <Box sx={{bgcolor:'#eeeeee',minHeight:'100vh'}}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? <Typography variant="h5" align="center">Loading...</Typography>:
        (
               <Activitydashboard activities={activities}
                      selectActivity={handleSelectActivity}

cancelSelectActivity={handleCancelSelectActivity}
selectedActivity={selectedActivity}
editMode={editMode}
openForm={handleFormOpen}
closeForm={handleFormClose}



/>
        )}

        

      </Container>
  
    </Box>
    
  )
}

export default App


import {   useEffect, useState } from 'react'

import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import Activitydashboard from '../../features/activities/dashboard/Activitydashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(()=>{
    axios.get('https://localhost:5001/api/activities')
  
    .then(response=>setActivities(response.data))

  },[])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(x=>x.id === id))
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
  const handleSubmitForm = (activity: Activity) => {
    if(activity.id){
      setActivities([...activities.filter(x=>x.id !== activity.id), activity])
      setSelectedActivity(activity);
    }else{
      activity.id = crypto.randomUUID();
      const newActivity= {...activity, id: activities.length.toString()}
      setActivities([...activities,newActivity])
      setSelectedActivity(activity);
    }
    setEditMode(false);
  }
  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(x=>x.id !== id)])
  }

  
  return (
    
    <Box sx={{bgcolor:'#eeeeee'}}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
<Activitydashboard activities={activities}
selectActivity={handleSelectActivity}

cancelSelectActivity={handleCancelSelectActivity}
selectedActivity={selectedActivity}
editMode={editMode}
openForm={handleFormOpen}
closeForm={handleFormClose}
submitForm={handleSubmitForm}
deleteActivity={handleDeleteActivity}

/>
      </Container>
  
    </Box>
    
  )
}

export default App

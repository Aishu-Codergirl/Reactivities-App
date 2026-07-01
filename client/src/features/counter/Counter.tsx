import { ButtonGroup, Typography } from "@mui/material"
import { useStore } from "../../lib/hooks/useStore"

import { Observer } from "mobx-react-lite"

export default function Counter() {    
   const {counterStore}=useStore()
return (

<>
  <Observer>
    {()=>(<>
    
    <Typography variant="h4" gutterBottom>
        {counterStore.title}
    </Typography>
      <Typography variant="h6" >
        {counterStore.count}
    </Typography>
    
    </>)}
  </Observer>

<ButtonGroup sx={{mt:3}}>
    <button  onClick={()=>counterStore.increment(1)}>Increment</button>
    

</ButtonGroup>
  
</>




)

}
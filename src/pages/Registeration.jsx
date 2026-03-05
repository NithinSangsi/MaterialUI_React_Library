import React from  'react'
import {Typography ,Paper,Box,TextField,Stack,Button} from '@mui/material'
import {useState} from 'react'

function Registeration(){
    const [loading,isLoading] = useState(false);
    return(
        <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        }}
    >
        <Box>
            <img src ="/public/Thumbs_up.png" alt="Thumbs up" width="500px" height= '600px'/>
        </Box>
        <Paper elevation={6} sx={{width: '500px',height : '500px', padding: '15px'}}>
            <Stack direction={'column'} spacing={3}>
            <Typography variant="h2">Signup</Typography>
            {/* <Typography>Registeration Page</Typography> */}
            {/* <Typography variant="body1">Registeration Page</Typography> */}
            <TextField
            required
            id="standard-required"
            label="Name"
            type='text'
            variant="standard"
            />
            <TextField
            required
            id="standard-required"
            label="Email"
            type='text'
            variant="standard"
            />
            <TextField
            required
            id="standard-required"
            label="Password"
            type='password'
            variant="standard"
            />
        <Button
          size="small"
          onClick={()=>{isLoading(!loading)}}
          loading={loading}
          variant="contained"
        >
          Register
        </Button>
        </Stack>
        </Paper>
    </Box>
        </>
    )
}
export default Registeration; 
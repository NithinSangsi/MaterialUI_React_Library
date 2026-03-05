import React from  'react'
import {Typography ,Paper,Box,TextField,Stack,Button} from '@mui/material'
import {useState} from 'react'

function Login(){
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
            <img src ="/public/MY_img.png" alt="Thumbs up" width="500px" height= '600px'/>
        </Box>
        <Paper elevation={6} sx={{width: '500px',height : '500px', padding: '15px'}}>
            <Stack direction={'column'} spacing={3}>
            <Typography variant="h2">Login</Typography>
            {/* <Typography>Registeration Page</Typography> */}
            {/* <Typography variant="body1">Registeration Page</Typography> */}
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
          Login
        </Button>
        </Stack>
        </Paper>
    </Box>
        </>
    )
}
export default Login; 
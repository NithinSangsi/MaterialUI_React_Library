import React from'react'
import {Typography,Stack} from '@mui/material'
import ResponsiveAppBar from '../components/Navbar'
import RecipeReviewCard from '../components/RecipeCard'
import {useEffect, useState} from 'react'  
function Home(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(data=>setPosts(data.recipes));
    },[])
    return(
        <> 
        <ResponsiveAppBar/>
        {/* <Typography variant="h1">Home Page</Typography>       */}
        <Stack variant="outlined" spacing={5} mt={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {
            posts.map((post)=>{
                return <RecipeReviewCard post={post}/>

            })
        }
        </Stack>
        </>
    )
}
export default Home;
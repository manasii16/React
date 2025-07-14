import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Paper, TextField, Stack, Button , ButtonGroup} from '@mui/material';
import FeedbackItem from '../feedbackItem/FeedbackItem';
import sortBy from "lodash/sortBy";


const FEEDBACK_API ='https://dummyjson.com/comments';

export default function FeedbackList(){
//api data 
    // data = []
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading]= useState(true);
    const [err, setErr]= useState(null);
    
    const [sort, setSort] = useState('original'); 

//api
    const fetch_feedbacks =() =>{
        axios.get(FEEDBACK_API)
        .then((res)=>{
            setFeedback(res.data.comments);
        })
        .catch((err)=>{
            setErr(err.message );
        })
        .finally(()=> {
            setLoading(false);
        });
    };

    useEffect(() => {
        fetch_feedbacks();
    }, []);

    //usememo concept
      const displayedFeedback = useMemo(() =>{
        if(sort === "original") 
          return feedback;

        const sorted = sortBy(
          feedback,
          fb => {
            return fb.user.username.toLowerCase()          
          }
        );

        return sort === "desc" ? sorted.reverse() : sorted;
      }, [feedback, sort]);



  if(loading)
    return(<CircularProgress sx={{ mt: 8, mx: 'auto', display: 'block' }} />
  )

  if(err)
  return(<Typography color="error" sx={{ mt: 8 }}>{err}</Typography>);

  // let originalColor = 'inherit';
  // let ascColor      = 'inherit';
  // let descColor     = 'inherit';

  // if (sort === 'original') originalColor = 'primary';
  // else if (sort === 'asc') ascColor = 'primary';
  // else descColor = 'primary';


  return (
    <Box sx={{ p: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
        mb={3}
      >
        <Typography variant="h4">Community Feedback</Typography>

        
      </Stack>

      {displayedFeedback.map(c => (
        <FeedbackItem key={c.id} {...c} />
      ))}
    </Box>
  );
}

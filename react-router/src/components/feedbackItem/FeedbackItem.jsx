import { memo } from 'react';
import { Paper, Typography } from '@mui/material';

function FeedbackItem({body, user }){
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold">
        {user.username}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {user.id}
      </Typography>
      <Typography>{body}</Typography>
    </Paper>
  );
}

export default memo(FeedbackItem);
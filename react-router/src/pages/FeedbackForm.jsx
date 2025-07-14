import { useState, useRef } from 'react';
import {Container,Box,TextField,Button,Typography,} from '@mui/material';

export default function FeedbackForm() {
  const data={
    name: '',
    email: '',
    comment: '',
  }
  // console.log('StateForm render');
  // const [form, setForm] = useState(data);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm((prev) => ({ ...prev, [name]: value }));
  //   console.log('use state', name, value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(form);
  //   // alert('Thanks for your feedback!');

  //   setForm(data);

console.log('useRefForm render');
  const formRef = useRef(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    formRef.current[name] = value;
    console.log('useRef-',name,value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);          
    alert('Thanks!');

    e.target.reset();                   
    formRef.current = data;
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: { xs: 3, sm: 5 },
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h4" align="center">
          Submit Feedback
        </Typography>

        <TextField
          label="Name"
          name="name"
          value={formRef.name}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formRef.email}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Comment"
          name="comment"
          value={formRef.comment}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
        />

        <Button type="submit" variant="contained" size="large">
          Send
        </Button>
      </Box>
    </Container>
  );
}

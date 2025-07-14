import { Container, Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import image from '../assets/feedbacj.jpeg'

export default function Home(){

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box sx={{ textAlign: 'center',
          p: { xs: 3, sm: 6 },
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* <img src={image} width={300} height={100} style={{ marginBottom: 16 }} /> */}

        <Typography variant="h3" component="h1" gutterBottom>
          Feedback Hub
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Share your thoughts, read what others think, and help us improve.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" >
         
          <Button
            component={Link}
            to="/feedbackform/new"
            variant="contained"
            size="large"
          >
            Submit Feedback
          </Button>

          <Button
            component={Link}
            to="/feedbackform/new"
            variant="outlined"
            size="large"
          >
            View Feedback
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

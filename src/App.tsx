import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Hello, MUI with TypeScript!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
};

export default App;

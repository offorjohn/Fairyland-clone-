// pages/SearchResults.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const dummyData = [
  'React Routing Guide',
  'Understanding useEffect',
  'MUI vs Bootstrap',
  'TypeScript Basics',
  'Deploying React to Hostinger',
];

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query')?.toLowerCase() || '';

  const filteredResults = dummyData.filter(item =>
    item.toLowerCase().includes(query)
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Search Results for: <strong>{query}</strong>
      </Typography>

      {filteredResults.length > 0 ? (
        filteredResults.map((item, idx) => (
          <Typography key={idx} variant="body1" sx={{ mb: 1 }}>
            • {item}
          </Typography>
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No results found.
        </Typography>
      )}
    </Box>
  );
};

export default SearchResults;

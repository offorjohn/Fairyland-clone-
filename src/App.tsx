import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#e0e0e0', // ✅ Light grey background just for the item
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#006600',
  fontWeight: 'bold',
}));

export default function HeaderBox() {
  return (
    <Box
      sx={{
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '94%',
            md: '65%',
          },
        }}
      >
        <Stack spacing={2}>
          <Item>Nairaland Clone</Item>
        </Stack>
      </Box>
    </Box>
  );
}

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f9f9f9', // soft off-white

  boxShadow: theme.shadows[1],
  
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#006600',
  fontWeight: 900, // or even 900 for extra bold


})
);


export default function HeaderBox() {
  return (
    <Box
    sx={{
      height: {
        xs: '15vh',  // on extra-small screens (mobile)
        sm: '10vh',  // small screens and up
      },
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
        <Stack spacing={2}><Item>
  <Typography variant="h6" fontWeight={900} color="#006600">
    Nairaland Clone
  </Typography>
  <Typography variant="body2" color="text.secondary">Welcome, john1101(m): Edit Profile / SH / Followed Topics(7) / FB / L&S / MT / FG / FS / Trending / Recent / New
  </Typography>
</Item>
        </Stack>
      </Box>
    </Box>
  );
}

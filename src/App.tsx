/* eslint-disable no-restricted-globals */
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['ana', 'Opt'];



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  boxShadow: theme.shadows[1],
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#006600',
  fontWeight: 900,
}));

const menuItems = [
  { label: 'Edit Profile', to: '/profile/edit' },
  { label: 'SH', to: '/sh' },
  { label: 'FT', to: '/topics/followed' },
  { label: 'FB', to: '/fb' },
  { label: 'L&S', to: '/ls' },
  { label: 'MT', to: '/mt' },
  { label: 'FG', to: '/fg' },
  { label: 'FS', to: '/fs' },
  { label: 'Trending', to: '/topics/trending' },
  { label: 'Recent', to: '/topics/recent' },
  { label: 'New', to: '/topics/new' },
];

export default function HeaderBox() {
  const theme = useTheme();

  
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 2,
        paddingTop: 0.6,
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
          <Item>
            <Typography variant="h6" fontWeight={900} color="#006600" gutterBottom>
              Nairaland Clone
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: 0.5,
                rowGap: 0.5,
              }}
            >
              <Typography component="span" fontWeight={200} color="#333333">
                Welcome, john1101(m):
              </Typography>
              {menuItems.map(({ label, to,  }, index) => (
                <Box
                  key={to}
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}
                >
                  {index !== 0 && (
                    <Typography
                      component="span"
                      sx={{ mx: 0.3, fontWeight: 200, color: '#333333' }}
                    >
                      /
                    </Typography>
                  )}
                  <Link
                    component={external ? 'a' : RouterLink}
                    {...(external ? { href: to, target: '_blank', rel: 'noopener noreferrer' } : { to })}
                    underline="hover"
                    sx={{ fontWeight: 200, color: '#333333' }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}

             
            

            <Box sx={{ mt: 0.6,  color: '#333333' }}>
            <Typography variant="body2">
                <Box component="span" fontWeight={700}>Stats</Box>: 3,248,940 members, 8,139,436 topics. <Box component="span" fontWeight={700}>Date</Box>: Sunday, 20 April 2025 at 12:50 AM /
              </Typography>
            </Box>
            <Button
                variant="outlined"
                size="small"
                color="error"
              
                onClick={() => alert('Logged out')}
               
                sx={{ ml: { xs: 0, md: 4 }, mt: { xs: 1, md: 0.7 } }}
              >
                Logout
              </Button>
            </Box>
            <label>
 
            <Autocomplete
        id="custom-input-demo"
        options={options}
        sx={{
          display: 'inline-block',
          width: isMobile ? '100%' : 300,
          '& input': {
            width: '100%',
            bgcolor: 'background.paper',
            color: theme.palette.getContrastText(theme.palette.background.paper),
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '8px 12px',
            outline: 'none',
            boxSizing: 'border-box',
          },
        }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder="Type to search..." />
          </div>
        )}
      />

    </label>
            
          </Item>
        </Stack>
      </Box>
    </Box>
  );
}

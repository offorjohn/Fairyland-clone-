import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
  { label: 'Followed Topics(7)', to: '/topics/followed' },
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
  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 2,
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
              <Typography component="span" fontWeight={900} color="#006600">
                Welcome, john1101(m):
              </Typography>
              {menuItems.map(({ label, to }, index) => (
                <Box
                  key={to}
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}
                >
                  {index !== 0 && (
                    <Typography
                      component="span"
                      sx={{ mx: 0.3, fontWeight: 900, color: '#006600' }}
                    >
                      /
                    </Typography>
                  )}
                  <Link
                    component={RouterLink}
                    to={to}
                    underline="hover"
                    sx={{ fontWeight: 900, color: '#006600' }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Item>
        </Stack>
      </Box>
    </Box>
  );
}

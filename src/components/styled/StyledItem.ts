// src/components/styled/StyledItem.ts

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  boxShadow: theme.shadows[1],
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#006600',
  fontWeight: 900,
}));

export default Item;

import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import RamenDiningRoundedIcon from '@mui/icons-material/RamenDiningRounded';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Box textAlign={'center'}>
        <Typography component={'div'} variant='h4' fontWeight={'bold'} gutterBottom>
          {'udonparadise'}
        </Typography>
        <RamenDiningRoundedIcon fontSize='large' />
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

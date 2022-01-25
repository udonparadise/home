import { Box, Typography } from '@mui/material';
import SickIcon from '@mui/icons-material/Sick';
import Layout from '../layouts/Layout';

const Error: React.FC = () => {
  return (
    <Layout>
      <Box textAlign={'center'} sx={{ color: 'text.secondary', my: 4 }}>
        <Typography variant='h4' fontWeight={'bold'} component={'div'}>
          {'Error!'}
        </Typography>
        <SickIcon sx={{ fontSize: 40, mt: 2 }} />
      </Box>
    </Layout>
  );
};

export default Error;

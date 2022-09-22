import Layout from '../../layouts/Layout';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Box } from '@mui/material';
const Note = () => {
  return (
    <Layout>
      <Box sx={{ height: "90vh" }}>
        <TwitterTimelineEmbed
          autoHeight
          sourceType="profile"
          screenName="udonparadise98"
        />
      </Box>
    </Layout>
  );
};

export default Note;
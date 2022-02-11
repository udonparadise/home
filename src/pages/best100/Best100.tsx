import { Box, Typography } from '@mui/material';
import Layout from '../../layouts/Layout';
import { SystemConst } from '../../const';
import { best100 } from '../../data/Best100Data';
import SongList from '../../components/songList/SongList';

const Best100: React.FC = () => {
  return (
    <Layout>
      <Typography variant='h4' fontWeight={'bold'}>
        {SystemConst.Page.BEST100}
      </Typography>
      <Typography sx={{ my: 1 }}>
        {'Personally favorite songs (Order of the Japanese syllabary)'}
      </Typography>
      <SongList data={best100} />
    </Layout>
  );
};

export default Best100;
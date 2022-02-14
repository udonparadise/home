import { Typography } from '@mui/material';
import Layout from '../../layouts/Layout';
import { SystemConst } from '../../const';
import { select100 } from '../../data/Select100Data';
import SongList from '../../components/songList/SongList';

const Select100: React.FC = () => {
  return (
    <Layout>
      <Typography variant='h4' fontWeight={'bold'}>
        {SystemConst.Page.SELECT100}
      </Typography>
      <Typography sx={{ my: 1 }}>
        {'Personally favorite songs (Order of the Japanese syllabary)'}
      </Typography>
      <SongList data={select100} />
    </Layout>
  );
};

export default Select100;
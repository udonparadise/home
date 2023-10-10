import { Typography } from '@mui/material';
import Layout from '../../layouts/Layout';
import { SystemConst } from '../../const';
import { select100 } from '../../data/Select100Data';
import SongList from '../../components/songList/SongList';

const Select100 = () => {
  return (
    <Layout>
      <Typography variant="h4" fontWeight={'bold'}>
        {SystemConst.Page.SELECT100}
      </Typography>
      <Typography sx={{ my: 1 }}>
        {'個人的に好きな曲を100曲選ぶ（途中）'}
      </Typography>
      <SongList data={select100} />
    </Layout>
  );
};

export default Select100;

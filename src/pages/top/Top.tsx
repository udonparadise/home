import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WorkIcon from '@mui/icons-material/Work';
import RoomIcon from '@mui/icons-material/Room';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PanToolIcon from '@mui/icons-material/PanTool';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LooksIcon from '@mui/icons-material/Looks';
import FactoryIcon from '@mui/icons-material/Factory';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import Layout from '../../layouts/Layout';

const data = [
  { icon: <EmojiEmotionsIcon color='secondary' />, primary: 'うどん', secondary: '好きな食べ物の名前より' },
  { icon: <WorkIcon color='secondary' />, primary: 'プログラマ', secondary: '黙々とコーディングしていたい' },
  { icon: <RoomIcon color='secondary' />, primary: '長野', secondary: '出身は新潟' },
  { icon: <FavoriteIcon color='secondary' />, primary: 'Hello! Project', secondary: 'ベリヲタの亡霊' },
];

const fav = [
  { icon: <PanToolIcon color='secondary' />, group: 'BEYOOOOONDS', oshi: '岡村美波' },
  { icon: <LocalBarIcon color='secondary' />, group: 'Juice=Juice', oshi: '江端妃咲 / 高木紗友希' },
  { icon: <OndemandVideoIcon color='secondary' />, group: 'OCHA NORMA', oshi: '北原もも' },
  { icon: <LooksIcon color='secondary' />, group: 'ハロプロ研修生', oshi: '' },
];

const legend = [
  { icon: <FactoryIcon color='secondary' />, group: 'Berryz工房', oshi: '須藤茉麻' },
  { icon: <AutoAwesomeIcon color='secondary' />, group: 'GAM', oshi: '松浦亜弥 / 藤本美貴' },
  { icon: <MarkunreadMailboxIcon color='secondary' />, group: 'S/mileage', oshi: '' },
];

const Top: React.FC = () => {
  return (
    <Layout>
      <Typography variant='h4' fontWeight={'bold'}>
        {'Welcome!'}
      </Typography>
      <Box>
        <List>
          {
            data.map((item) => (
              <ListItem key={item.primary}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.primary} secondary={item.secondary} />
              </ListItem>
            ))
          }
        </List>
      </Box>
      <Typography variant='h5' fontWeight={'bold'} sx={{ mt: 2 }}>
        {'favorite'}
      </Typography>
      <List>
        {
          fav.map((item) => (
            <ListItem key={item.group}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.group} secondary={item.oshi} />
            </ListItem>
          ))
        }
      </List>
      <Typography variant='h5' fontWeight={'bold'} sx={{ mt: 2 }}>
        {'legend'}
      </Typography>
      <List>
        {
          legend.map((item) => (
            <ListItem key={item.group}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.group} secondary={item.oshi} />
            </ListItem>
          ))
        }
      </List>
    </Layout>
  );
};

export default Top;

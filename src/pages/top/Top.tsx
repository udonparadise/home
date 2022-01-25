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
  { icon: <EmojiEmotionsIcon color='primary' />, primary: 'Udon', secondary: 'from the name of my favorite food' },
  { icon: <WorkIcon color='primary' />, primary: 'Programmer', secondary: 'working for my favorite idol!' },
  { icon: <RoomIcon color='primary' />, primary: 'Nagano, Japan', secondary: 'born in Niigata' },
  { icon: <FavoriteIcon color='primary' />, primary: 'Hello! Project', secondary: 'ghost of Berryz Kobo fan' },
];

const fav = [
  { icon: <PanToolIcon color='primary' />, group: 'BEYOOOOONDS', oshi: 'Okamura Minami' },
  { icon: <LocalBarIcon color='primary' />, group: 'Juice=Juice', oshi: 'Ebata Kisaki' },
  { icon: <OndemandVideoIcon color='primary' />, group: 'OCHA NORMA', oshi: 'Kitahara Momo' },
  { icon: <LooksIcon color='primary' />, group: 'Hellopro Kenshusei', oshi: '' },
];

const legend = [
  { icon: <FactoryIcon color='primary' />, group: 'Berryz Kobo', oshi: 'Sudo Maasa' },
  { icon: <AutoAwesomeIcon color='primary' />, group: 'GAM', oshi: 'Matsuura Aya / Fujimoto Miki' },
  { icon: <MarkunreadMailboxIcon color='primary' />, group: 'S/mileage', oshi: '' },
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

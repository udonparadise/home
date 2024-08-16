import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WorkIcon from '@mui/icons-material/Work';
import RoomIcon from '@mui/icons-material/Room';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LooksIcon from '@mui/icons-material/Looks';
import FactoryIcon from '@mui/icons-material/Factory';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import Layout from '../../layouts/Layout';

const data = [
  { icon: <EmojiEmotionsIcon />, primary: 'udon', secondary: '' },
  { icon: <WorkIcon />, primary: 'プログラマ', secondary: '' },
  { icon: <RoomIcon />, primary: '長野', secondary: '' },
  {
    icon: <ThumbUpIcon />,
    primary: 'Hello! Project',
    secondary: 'ベリヲタの亡霊',
  },
];

const fav = [
  { icon: <DiamondIcon />, group: 'BEYOOOOONDS', oshi: '岡村美波' },
  {
    icon: <LocalBarIcon />,
    group: 'Juice=Juice',
    oshi: '江端妃咲 / 高木紗友希',
  },
  { icon: <LooksIcon />, group: 'ハロプロ研修生', oshi: '' },
];

const legend = [
  { icon: <FactoryIcon />, group: 'Berryz工房', oshi: '須藤茉麻' },
  { icon: <AutoAwesomeIcon />, group: 'GAM', oshi: '松浦亜弥 / 藤本美貴' },
  { icon: <MarkunreadMailboxIcon />, group: 'S/mileage', oshi: '' },
];

const Top = () => {
  return (
    <Layout>
      <Typography variant="h4" fontWeight={'bold'}>
        {'Welcome!'}
      </Typography>
      <Box>
        <List>
          {data.map((item) => (
            <ListItem key={item.primary}>
              <ListItemIcon sx={{ color: 'primary.dark' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography variant="h5" fontWeight={'bold'} sx={{ mt: 2 }}>
        {'favorite'}
      </Typography>
      <List>
        {fav.map((item) => (
          <ListItem key={item.group}>
            <ListItemIcon sx={{ color: 'primary.dark' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.group} secondary={item.oshi} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" fontWeight={'bold'} sx={{ mt: 2 }}>
        {'legend'}
      </Typography>
      <List>
        {legend.map((item) => (
          <ListItem key={item.group}>
            <ListItemIcon sx={{ color: 'primary.dark' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.group} secondary={item.oshi} />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default Top;

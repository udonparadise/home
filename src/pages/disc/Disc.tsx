import { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, tabsClasses, Typography } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import Layout from '../../layouts/Layout';
import { SystemConst } from '../../const';
import { discList } from '../../data/DiscData';
import { discInfo } from '../../model/Disc';

type TabPanelProps = {
  artist: string,
  value: number,
  index: number,
  data: discInfo[]
};

const TabPanel = (props: TabPanelProps) => {
  const { artist, value, index, data } = props;

  return (
    <Box sx={{ my: 2 }} hidden={value !== index && value !== 0}>
      <Typography variant='h6' fontWeight={'bold'}>
        {artist}
      </Typography>
      <List>
        {
          data.map(disc => {
            return (
              <ListItem key={disc.name} alignItems='flex-start' disablePadding>
                <ListItemIcon>
                  <AudiotrackIcon fontSize='small' color='secondary' />
                </ListItemIcon>
                <ListItemText primary={
                  <Typography sx={{ textDecoration: disc.doNotHave ? 'line-through' : 'none' }}>
                    {disc.name}
                  </Typography>}
                />
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  );
};

const Disc = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography variant='h4' fontWeight={'bold'}>
        {SystemConst.Page.DISC}
      </Typography>
      <Typography sx={{ my: 1 }}>
        {'収集した映像作品を自分用にメモしているだけ'}
      </Typography>
      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="All" />
          {
            discList.map(disc => {
              return <Tab label={disc.artist} />;
            })
          }
        </Tabs>
      </Box>
      {
        discList.map((disc, index) => {
          return <TabPanel artist={disc.artist} value={value} index={index + 1} data={disc.disc} />;
        })
      }
    </Layout>
  );
};

export default Disc;

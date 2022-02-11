import { useState } from 'react';
import { Box, Tab, Tabs, tabsClasses, Typography } from '@mui/material';
import Layout from '../../layouts/Layout';
import { SystemConst } from '../../const';
import EventList from '../../components/eventList/EventList';
import { e2021, e2020, e2019, e2018, e2017, e2016, e2015, e2014, e2013 } from '../../data/EventData';
import { event } from '../../model/Event';

type TabPanelProps = {
  value: number,
  index: number,
  year: number,
  data: event[],
};

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { value, index, year, data } = props;

  return (
    <Box sx={{ my: 2 }} hidden={value !== index && value !== 0}>
      <EventList year={year} data={data} />
    </Box>
  );
};

const Events: React.FC = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography variant='h4' fontWeight={'bold'}>
        {SystemConst.Page.EVENTS}
      </Typography>
      <Box sx={{ flexGrow: 1, my: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="All" />
          <Tab label="2021" />
          <Tab label="2020" />
          <Tab label="2019" />
          <Tab label="2018" />
          <Tab label="2017" />
          <Tab label="2016" />
          <Tab label="2015" />
          <Tab label="2014" />
          <Tab label="2013" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1} year={2021} data={e2021} />
      <TabPanel value={value} index={2} year={2020} data={e2020} />
      <TabPanel value={value} index={3} year={2019} data={e2019} />
      <TabPanel value={value} index={4} year={2018} data={e2018} />
      <TabPanel value={value} index={5} year={2017} data={e2017} />
      <TabPanel value={value} index={6} year={2016} data={e2016} />
      <TabPanel value={value} index={7} year={2015} data={e2015} />
      <TabPanel value={value} index={8} year={2014} data={e2014} />
      <TabPanel value={value} index={9} year={2013} data={e2013} />
    </Layout>
  );
};

export default Events;

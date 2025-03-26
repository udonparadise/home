import { useState } from 'react';
import { Box, Tab, Tabs, tabsClasses, Typography } from '@mui/material';
import Layout from '../../layouts/Layout';
import { SystemConst } from '../../const';
import EventList from '../../components/eventList/EventList';
import { events } from '../../data/EventData';
import { event } from '../../model/Event';

type TabPanelProps = {
  value: number;
  index: number;
  year: number;
  data: event[];
};

const TabPanel = (props: TabPanelProps) => {
  const { value, index, year, data } = props;

  return (
    <Box sx={{ my: 2 }} hidden={value !== index && value !== 0}>
      <EventList year={year} data={data} />
    </Box>
  );
};

const Events = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography variant="h4" fontWeight={'bold'}>
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
          {events.map((event) => {
            return <Tab label={event.year} key={`tab-${event.year}`} />;
          })}
        </Tabs>
      </Box>
      {events.map((event, index) => {
        return (
          <TabPanel
            value={value}
            index={index + 1}
            year={event.year}
            data={event.data}
            key={`tabpanel-${event.year}`}
          />
        );
      })}
    </Layout>
  );
};

export default Events;

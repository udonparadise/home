import { List, Typography } from '@mui/material';
import { event } from '../../model/Event';
import EventListItem from './EventListItem';

type EventListProps = {
  year: number,
  data: event[],
};

const EventList: React.FC<EventListProps> = (props) => {
  const { year, data } = props;

  return (
    <>
      <Typography variant='h6' fontWeight={'bold'}>
        {year}
      </Typography>
      <List sx={{ width: '100%' }}>
        {
          data.length > 0 ? (
            data.map(event => {
              return <EventListItem data={event} key={event.month + event.day + event.name} />
            })
          ) : (
            <>{'No Data.'}</>
          )
        }
      </List>
    </>
  );
};

export default EventList;

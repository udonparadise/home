import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import { event } from '../../model/Event';
import { stringToColor } from '../../util';

type EventListItemProps = {
  data: event;
};

type DescriptionItemProps = {
  icon: React.ReactElement;
  text: string;
};

function setAvatar(event: event) {
  return {
    sx: {
      bgcolor: stringToColor(event.group),
      fontSize: '0.8rem',
    },
    children: event.month + '/' + event.day,
  };
}

const DescriptionItem = (props: DescriptionItemProps) => {
  const { icon, text } = props;
  return (
    <Grid item>
      <Grid container alignItems={'start'}>
        <Grid item>{icon}</Grid>
        <Grid item sx={{ mr: 1 }}>
          {text}
        </Grid>
      </Grid>
    </Grid>
  );
};

const EventListItem = (props: EventListItemProps) => {
  const { data } = props;

  return (
    <ListItem alignItems="flex-start" key={data.month + data.day + data.name}>
      <ListItemAvatar>
        <Avatar {...setAvatar(data)} variant="rounded" />
      </ListItemAvatar>
      <ListItemText
        primary={data.name}
        primaryTypographyProps={{ sx: { mb: 1 } }}
        secondary={
          <Grid container>
            {data.site && (
              <DescriptionItem
                icon={<RoomIcon fontSize="small" />}
                text={data.site}
              />
            )}
            {data.time && (
              <DescriptionItem
                icon={<AccessTimeFilledIcon fontSize="small" />}
                text={data.time}
              />
            )}
            {data.member && (
              <DescriptionItem
                icon={<PersonIcon fontSize="small" />}
                text={data.member}
              />
            )}
            {data.note && (
              <DescriptionItem
                icon={<DescriptionIcon fontSize="small" />}
                text={data.note}
              />
            )}
          </Grid>
        }
      />
    </ListItem>
  );
};

export default EventListItem;

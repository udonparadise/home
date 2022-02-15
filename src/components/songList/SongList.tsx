import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { song } from '../../model/Song';
import { stringToColor } from '../../util';

type SongListProps = {
  data: song[]
};

type SongListItemProps = {
  index: number,
  song: song,
}

const SongListItem: React.FC<SongListItemProps> = (props) => {
  const { index, song } = props;

  return (
    <ListItem key={song.name}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: stringToColor(song.artist) }}>{index + 1}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={song.name}
        primaryTypographyProps={{ sx: { mb: 1 } }}
        secondary={(song.artistSub ?? song.artist) + '(' + song.year + ')'}
      />
    </ListItem>
  );
};

const SongList: React.FC<SongListProps> = (props) => {
  const { data } = props;

  return (
    <List sx={{ width: '100%' }}>
      {
        data.map((song, index) => {
          return <SongListItem index={index} song={song} />
        })
      }
    </List>
  );
};

export default SongList;
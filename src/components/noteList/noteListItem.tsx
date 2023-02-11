import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { note } from '../../model/Note';
import { FaKiwiBird } from 'react-icons/fa';

type NoteListItemProps = {
  note: note;
};

const NoteListItem = (props: NoteListItemProps) => {
  const { note } = props;
  const breakedText = note.note.split('¥n').map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));
  const date = new Date(note.date.year, note.date.month - 1, note.date.day);

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'primary.dark' }}>
          <FaKiwiBird />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={breakedText}
        secondary={date.toDateString()}
        secondaryTypographyProps={{ textAlign: 'right' }}
      />
    </ListItem>
  );
};

export default NoteListItem;

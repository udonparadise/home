import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { note } from '../../model/Note';

type NoteListItemProps = {
  note: note
}

const NoteListItem = (props: NoteListItemProps) => {
  const { note } = props;
  const breakedText = note.note.split("¥n").map((line, key) => <span key={key}>{line}<br /></span>);

  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <FlutterDashIcon fontSize='large' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={breakedText}
        secondary={note.date.toDateString()}
        secondaryTypographyProps={{ textAlign: 'right' }}
      />
    </ListItem>
  );
};

export default NoteListItem;
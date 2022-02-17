import { useEffect, useState } from 'react';
import { Box, List, Pagination } from '@mui/material';
import Layout from '../../layouts/Layout';
import { notes } from '../../data/NoteData';
import { note } from '../../model/Note';
import NoteListItem from '../../components/noteList/noteListItem';

const perPage = 5;

type PaginationContainerProps = {
  count: number,
  page: number,
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
};

const PaginationContainer: React.FC<PaginationContainerProps> = (props) => {
  const { count, page, onChange } = props;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

const Note: React.FC = () => {
  const [displayNote, setDisplayNote] = useState<note[]>([]);
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const start = (page - 1) * perPage;
    const end = (start + perPage) > notes.length ? notes.length : start + perPage;
    setDisplayNote(notes.reverse().slice(start, end));
  }, [page]);

  return (
    <Layout>
      <PaginationContainer
        count={Math.ceil(notes.length / perPage)}
        page={page}
        onChange={handleChange}
      />
      <List>
        {
          displayNote.map(item => {
            return <NoteListItem note={item} key={item.date.getFullYear + '-' + item.date.getMonth + '-' + item.date.getDate} />;
          })
        }
      </List>
      <PaginationContainer
        count={Math.ceil(notes.length / perPage)}
        page={page}
        onChange={handleChange}
      />
    </Layout>
  );
};

export default Note;
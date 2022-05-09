import Layout from '../../layouts/Layout';
import { Timeline } from 'react-twitter-widgets';

const Note = () => {
  return (
    <Layout>
      <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'udonparadise98'
            }}
            options={{
              height: '800'
            }}
          />
      </Layout>
  );
};

export default Note;
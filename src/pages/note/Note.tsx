import Layout from '../../layouts/Layout';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const Note = () => {
  return (
    <Layout>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="udonparadise98"
        options={{height: "90vh"}}
      />
    </Layout>
  );
};

export default Note;
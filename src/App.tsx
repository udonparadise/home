import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/top/Top';
import Events from './pages/events/Events';
import Disc from './pages/disc/Disc';
import Select100 from './pages/select100/Select100';
import Note from './pages/note/Note';
import Error from './pages/404';
import { SystemConst } from './const';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={SystemConst.Path.HOME} element={<Top />} />
        <Route path={SystemConst.Path.EVENTS} element={<Events />} />
        <Route path={SystemConst.Path.DISC} element={<Disc />} />
        <Route path={SystemConst.Path.SELECT100} element={<Select100 />} />
        <Route path={SystemConst.Path.NOTE} element={<Note />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

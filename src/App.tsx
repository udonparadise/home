import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/top/Top';
import Events from './pages/events/Events';
import Select100 from './pages/select100/Select100';
import Error from './pages/404';
import { SystemConst } from './const';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path={SystemConst.Path.EVENTS} element={<Events />} />
        <Route path={SystemConst.Path.SELECT100} element={<Select100 />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

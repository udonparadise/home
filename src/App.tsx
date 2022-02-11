import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/top/Top';
import Events from './pages/events/Events';
import Best100 from './pages/best100/Best100';
import Error from './pages/404';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/events' element={<Events />} />
        <Route path='/best100' element={<Best100 />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

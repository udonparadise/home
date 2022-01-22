import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import Error from './pages/404';

function App() {
  return (
    <Layout>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;

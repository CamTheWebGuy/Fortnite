import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forums from './pages/Forums';
import General from './pages/General';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/forums' element={<Forums />} />
        <Route exact path='/forums/general' element={<General />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

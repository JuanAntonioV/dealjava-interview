import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './containers';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

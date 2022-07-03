import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Bantuan, Home, Kategori, Login } from './containers';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/kategori/:id' element={<Kategori />} />
            <Route path='/bantuan' element={<Bantuan />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

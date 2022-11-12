import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Main from './components/Main';
import Nav from './components/nav/Nav';
import Nft from './components/place-to-stay/Nft';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Place-to-stay" element={<Nft />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

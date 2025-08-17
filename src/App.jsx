import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import NotFoundPage from './pages/404_Page';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/privacy_policy';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
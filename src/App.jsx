import { Routes, Route } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
import Donate from './views/Donate'; 

function App() {
  return (
    <Routes>
      {/* All pages use BaseLayout */}
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="available-cats" element={<AvailableCats />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="donate" element={<Donate />} /> {/* Donate page */}
      </Route>
    </Routes>
  );
}

export default App;

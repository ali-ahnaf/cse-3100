import { Routes, Route } from 'react-router-dom';

import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import Donate from './views/Donate'; // ✅ import Donate page

function App() {
  return (
    <Routes>
      {/* BaseLayout wraps all pages */}
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} /> {/* ✅ new route */}
      </Route>
    </Routes>
  );
}

export default App;

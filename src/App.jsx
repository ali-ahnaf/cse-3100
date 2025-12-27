import { Routes, Route } from 'react-router-dom';
import BaseLayout from './views/BaseLayout.jsx';
import Home from './views/Home.jsx';
import AvailableCats from './views/AvailableCats.jsx';
import About from './views/About.jsx';
import ContactUs from './views/ContactUs.jsx';
import Donate from './views/Donate.jsx';

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs';

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="available-cats" element={<AvailableCats />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;

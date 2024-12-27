import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import Donate from './views/Donate'; // Import the Donate component

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/about-us'} element={<AboutUs />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
        <Route path={'/donate'} element={<Donate />} /> {/* Add the Donate route */}
      </Route>
    </Routes>
  );
}

export default App;

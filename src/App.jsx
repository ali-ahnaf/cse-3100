import { Outlet, Route, Routes, useLocation } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs';

function App() {
  const location = useLocation();
  
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home key={location.key} />} />
        <Route path={'/about-us'} element={<AboutUs />} />
        <Route path={'/available-cats'} element={<AvailableCats key={location.key} />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;

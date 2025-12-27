import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AboutUs from './views/AboutUs';      // Import AboutUs
import ContactUs from './views/ContactUs';  // Import ContactUs

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
        <Route path={'/about-us'} element={<AboutUs />} />      {/* New Route */}
        <Route path={'/contact-us'} element={<ContactUs />} />  {/* New Route */}
      </Route>
    </Routes>
  );
}

export default App;
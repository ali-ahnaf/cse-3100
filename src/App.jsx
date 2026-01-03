import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';

// Import the new views (ensure you have created these files in /views)
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';

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
        {/* Main Pages */}
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        
        {/* New Client Requested Pages */}
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/contact'} element={<ContactUs />} />
        
        {/* Placeholder for Donate page if needed for demo */}
        <Route path={'/donate'} element={<div className="text-center mt-5"><h3>Donations Coming Soon!</h3></div>} />
      </Route>
    </Routes>
  );
}

export default App;
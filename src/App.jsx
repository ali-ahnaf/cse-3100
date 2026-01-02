import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';

// Import new pages (to be created)
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';

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
        <Route path={'/contact'} element={<ContactUs />} />
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/donate'} element={
          <div className="text-center p-5">
            <h2>Donate</h2>
            <p>Donation page coming soon!</p>
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App;
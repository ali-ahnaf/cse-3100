import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import Contact from './views/Contact';
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
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/aboutus'} element={<AboutUs />} />




        
        



      </Route>
    </Routes>
  );
}

export default App;

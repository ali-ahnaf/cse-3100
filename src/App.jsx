import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import Contact from './views/Contact';
import About from './views/About';
import Donate from './views/Donate';

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
        <Route path={'/donate'} element={<Donate />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/about'} element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;

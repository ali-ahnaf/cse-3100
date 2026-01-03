import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import About from './views/About';
import Contact from './views/Contact';
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
        <Route path={'/about'} element={<About />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/donate'} element={<Donate />} />
        <Route path={'/contact'} element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

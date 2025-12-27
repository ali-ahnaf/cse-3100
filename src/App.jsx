import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import Contact from './views/contact';
import About  from './views/about';
import AvailableCats from './views/AvailableCats';

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
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />

      </Route>
    </Routes>
  );
}

export default App;

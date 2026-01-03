import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <Routes>
      {/* BaseLayout wraps all pages */}
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Available Cats page */}
        <Route path="/available-cats" element={<AvailableCats />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* Optional: catch-all 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

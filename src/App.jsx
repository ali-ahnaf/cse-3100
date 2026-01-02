import { Outlet, Route, Routes } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';

function Donate() {
  return (
    <section>
      <h2>Donate</h2>
      <p>Thank you for considering a donation to Purrfect Adoption!</p>
      <p>
        Your support helps us provide care, shelter, and find loving homes for
        our cats.
      </p>
    </section>
  );
}

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
        <Route path={'/about-us'} element={<AboutUs />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/donate'} element={<Donate />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;



import { Route, Routes } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import AboutUs from './views/AboutUs';      // Import the new About page
import ContactUs from './views/ContactUs';  // Import the new Contact page

const Donate = () => <div className="container"><h2>Donate Page</h2><p>Coming soon!</p></div>;
function App() {
  return (
    <Routes>
      {/* BaseLayout acts as the shell for all pages */}
      <Route path="/" element={<BaseLayout />}>
        {/* The index route is the home page */}
        <Route index element={<Home />} />
        
        {/* These match the Links we added to the BaseLayout navbar */}
        <Route path="about" element={<AboutUs />} />
        <Route path="available-cats" element={<AvailableCats />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;

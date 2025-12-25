import { Routes, Route } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import About from './views/About';     // New page
import Contact from './views/Contact'; // New page

function App() {
  return (
    <Routes>
      {/* BaseLayout wraps all child routes */}
      <Route path="/" element={<BaseLayout />}>
        {/* Child routes */}
        <Route index element={<Home />} />                   {/* / */}
        <Route path="available-cats" element={<AvailableCats />} />  {/* /available-cats */}
        <Route path="about" element={<About />} />          {/* /about */}
        <Route path="contact" element={<Contact />} />      {/* /contact */}
      </Route>
    </Routes>
  );
}

export default App;

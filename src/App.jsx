import { Routes, Route } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import About from './views/About';
import AvailableCats from './views/AvailableCats';
import Contact from './views/Contact';

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

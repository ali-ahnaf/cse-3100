import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import About from './views/About';     // <--- Added This
import Contact from './views/Contact'; // <--- Added This

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout><Outlet /></BaseLayout>}>
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/about" element={<About />} />      {/* <--- Added This */}
        <Route path="/contact" element={<Contact />} />  {/* <--- Added This */}
      </Route>
    </Routes>
  );
}

export default App;
import { Route, Routes } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="available-cats" element={<AvailableCats />} />
      </Route>
    </Routes>
  );
}

export default App;
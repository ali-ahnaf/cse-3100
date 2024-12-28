import { Outlet, Route, Routes } from 'react-router-dom'; // Correct import from 'react-router-dom'
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
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
        <Route path="/" element={<Home />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        
      </Route>
    </Routes>
  );
}

export default App;

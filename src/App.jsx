import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import { ContactUs } from './ContactUs/ContactUs';
import AboutUs from './views/AboutUs';

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
        <Route path={'/ContactUs'} element={<ContactUs/>}/>
        <Route path={'AboutUs'} element={<AboutUs/>}/>
       
 
        
      </Route>
    </Routes>
  );
}

export default App;

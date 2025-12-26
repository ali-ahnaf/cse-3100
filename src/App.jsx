import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";

import BaseLayout from "./views/BaseLayout";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs.jsx";
import AvailableCats from "./views/AvailableCats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <BaseLayout>
              <Outlet />
            </BaseLayout>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/available-cats" element={<AvailableCats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

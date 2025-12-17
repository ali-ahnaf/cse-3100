import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";

import BaseLayout from "./views/BaseLayout";
import Home from "./views/Home";
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
          <Route path="/available-cats" element={<AvailableCats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

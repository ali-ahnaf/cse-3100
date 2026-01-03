import { Route, Routes } from "react-router-dom";
import BaseLayout from "./views/BaseLayout";
import Home from "./views/Home";
import ContactUs from "./views/Contactus";
import AboutUs from "./views/Aboutus";
import Donate from "./views/Donate";
import AvailableCats from "./views/AvailableCats";

function App() {
  return (
    
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/available-cats"} element={<AvailableCats />} />
          <Route path={"/about-us"} element={<AboutUs />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/donate"} element={<Donate />} />
        </Route>
      </Routes>

  );
}

export default App;

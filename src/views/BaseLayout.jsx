import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BaseLayout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main id="content">
        <Outlet />
      </main>

      <footer>
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;

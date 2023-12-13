import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Create this file for custom styling if needed

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        ☰
      </button>
      {/* Add your sidebar icons and content here */}
    </div>
  );
};

export default Sidebar;

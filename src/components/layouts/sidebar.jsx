import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiHome, FiPlusCircle, FiTarget, FiMenu, FiX } from 'react-icons/fi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <div
        className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">IELTS Tracker</h2>
          <nav>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center p-2 mb-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              <FiHome className="mr-2" /> Dashboard
            </NavLink>
            <NavLink
              to="/test-input"
              className={({ isActive }) =>
                `flex items-center p-2 mb-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              <FiPlusCircle className="mr-2" /> Add Test
            </NavLink>
            <NavLink
              to="/improvement-plan"
              className={({ isActive }) =>
                `flex items-center p-2 mb-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              <FiTarget className="mr-2" /> Improvement Plan
            </NavLink>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
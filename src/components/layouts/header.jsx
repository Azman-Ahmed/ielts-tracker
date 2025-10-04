import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function Header() {


  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">IELTS Tracker Dashboard</h1>
      {user && (
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">{user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Home() {
//   const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to IELTS Tracker</h1>
        {user ? (
          <Link to="/dashboard" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Go to Dashboard
          </Link>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Login
            </Link>
            <Link to="/signup" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
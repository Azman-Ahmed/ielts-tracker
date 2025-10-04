import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ScoreChart from '../components/Dashboard/ScoreChart';
import MistakeStats from '../components/Dashboard/MistakeStats';

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome, {user?.email}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Score Progress</h3>
          <ScoreChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Mistake Analysis</h3>
          <MistakeStats />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
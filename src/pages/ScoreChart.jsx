import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ScoreChart() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchScores = async () => {
      try {
        const q = query(
          collection(db, `users/${user.uid}/practiceTests`),
          orderBy('date', 'asc')
        );
        const querySnapshot = await getDocs(q);
        const tests = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (tests.length === 0) {
          setError('No test data available.');
          setLoading(false);
          return;
        }

        const labels = tests.map(test =>
          new Date(test.date.seconds * 1000).toLocaleDateString()
        );
        const overallBands = tests.map(test => test.overallBand);
        const listeningScores = tests.map(test => test.listeningScore);
        const readingScores = tests.map(test => test.readingScore);
        const writingScores = tests.map(test => test.writingScore);
        const speakingScores = tests.map(test => test.speakingScore);

        setData({
          labels,
          datasets: [
            {
              label: 'Overall Band',
              data: overallBands,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.4,
              fill: false,
            },
            {
              label: 'Listening',
              data: listeningScores,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              tension: 0.4,
              fill: false,
            },
            {
              label: 'Reading',
              data: readingScores,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.4,
              fill: false,
            },
            {
              label: 'Writing',
              data: writingScores,
              borderColor: 'rgb(255, 206, 86)',
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              tension: 0.4,
              fill: false,
            },
            {
              label: 'Speaking',
              data: speakingScores,
              borderColor: 'rgb(153, 102, 255)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              tension: 0.4,
              fill: false,
            },
          ],
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load scores.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchScores();
  }, [user]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'IELTS Score Progress',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 9,
        title: {
          display: true,
          text: 'Band Score',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Test Date',
        },
      },
    },
  };

  return (
    <div className="w-full h-96">
      {loading ? (
        <p className="text-gray-600 text-center">Loading scores...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}

export default ScoreChart;
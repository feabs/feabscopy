import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [status, setStatus] = useState('Loading...');
  useEffect(() => {
    axios.get('/api/health').then(res => {
      setStatus(res.data.status);
    }).catch(() => {
      setStatus('API connection failed');
    });
  }, []);
  return <h1>FeabsCopy Status: {status}</h1>;
}
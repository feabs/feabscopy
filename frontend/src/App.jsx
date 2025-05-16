import { useEffect, useState } from 'react';
import API from './services/api';

export default function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    API.get('/health')
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('API connection failed'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '4rem' }}>
      <h1>FeabsCopy Status: {status}</h1>
    </div>
  );
}

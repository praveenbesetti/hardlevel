// src/TrendingTopics.js
import React, { useState } from 'react';
import axios from 'axios';

const TrendingTopics = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runScript = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/run-script');
      setResult(response.data);
    } catch (error) {
      console.error('Error running script:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={runScript} disabled={loading}>
        {loading ? 'Running...' : 'Click here to run the script'}
      </button>
      {result && (
        <div>
          <p>These are the most happening topics as on {result.dateTime}</p>
          <ul>
            <li>{result.trend1}</li>
            <li>{result.trend2}</li>
            <li>{result.trend3}</li>
            <li>{result.trend4}</li>
            <li>{result.trend5}</li>
          </ul>
          <p>The IP address used for this query was {result.ipAddress}.</p>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TrendingTopics;

import { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gmail validation
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(username)) {
      setMessage('Username must be in the format: yourname@gmail.com');
      return;
    }

    axios.post(
      'http://localhost:5000/api/auth/signup',
      { username, password },
      { withCredentials: true }
    )
      .then(() => {
        setMessage('Signup successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 500);
      })
      .catch(err => {
        setMessage(err.response?.data?.message || 'Signup failed');
      });
  };

  return (
    <div className="login-page">
      {/* Dark overlay */}
      <div className="bg-overlay"></div>

      {/* Glass container */}
      <div className="container">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>Gmail ID:</label>
          <input
            type="email"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="yourname@gmail.com"
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Signup</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Signup;

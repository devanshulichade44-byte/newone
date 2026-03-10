import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  // ✅ Handle CAPTCHA
  const handleCaptchaChange = (value) => {
    console.log("✅ Captcha value:", value);
    setCaptchaValue(value);
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Gmail validation
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(username)) {
      setMessage('Username must be in the format: yourname@gmail.com');
      return;
    }

    // Captcha validation
    if (!captchaValue) {
      setMessage('Please verify the CAPTCHA.');
      return;
    }

    // Send login + captcha to backend
    axios.post(
      'http://localhost:5000/api/auth/login',
      { username, password, captchaValue },
      { withCredentials: true }
    )
      .then(() => {
        setMessage('Login successful!');
        window.location.href = '/';
      })
      .catch(() => {
        setMessage('Login failed. Redirecting to signup...');
        setTimeout(() => navigate('/signup'), 1500);
      });
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Gmail ID:</label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="yourname@gmail.com"
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          {/* ✅ reCAPTCHA v2 Checkbox */}
          <div style={{ marginTop: '15px', marginBottom: '15px' }}>
            <ReCAPTCHA
              sitekey="6LdcogssAAAAAMUkmPg8smHaG4C4qNLmvwosMzRU"  // ← your v2 site key
              onChange={handleCaptchaChange}
              theme="light" // can be "dark" too
            />
          </div>

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;

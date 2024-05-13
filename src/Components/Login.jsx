import { useState } from 'react';
import { Box, TextField, Typography, Modal, Button } from '@mui/material';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login1() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false); // State to manage the visibility of the pop-up
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [id]: value }));
  };

  const loginHandler = () => {
    axios
      .post('http://localhost:8080/login', inputs)
      .then((response) => {
        console.log(response.data);
        if (response.data === 'success') {
          navigate('/Menu'); // Redirect to dashboard upon successful login
        } else {
          setMessage(response.data);
          setOpen(true); // Open the pop-up for wrong login attempt
        }
      })
      .catch((err) => console.error(err));
  };

  const handleClose = () => {
    setOpen(false); // Close the pop-up
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <TextField
            id="email"
            type="email"
            placeholder="Email"
            variant="outlined"
            value={inputs.email}
            onChange={inputHandler}
          />
          <TextField
            id="password"
            type="password"
            placeholder="Password"
            variant="outlined"
            value={inputs.password}
            onChange={inputHandler}
          />
          <a href="/sign">Forgot your password?</a>
          <button onClick={loginHandler}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <Link to="/sign">
            <button className="ghost" id="signUp">Sign Up</button>
          </Link>
          </div>
        </div>
      </div>
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="/sign" style={{ textDecoration: 'none' }}>
  <Button variant="contained" color="primary">Sign Up</Button>
</Link>
        </form>
      </div>
      {/* Wrong login pop-up */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" component="h2">
            Wrong Credentials
          </Typography>
          <Typography variant="body1">{message}</Typography>
          <Button onClick={handleClose} color="primary" variant="contained" sx={{ mt: 2 }}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Login1;
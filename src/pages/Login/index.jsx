import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';


const Login = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handlePrijavljivanje = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
        if (response.data.length === 1) {
          console.log('Prijavljivanje uspešno:');
          navigate('/');
        } else {
          alert("!!!");
        }
      } catch (error) {
        console.error('Greška prilikom prijavljivanja:', error);
      }
    };



  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4 reg-title">Sing in</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username..."
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password.."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
           
              <button  className="btn btn-primary" onClick={handlePrijavljivanje}>
                Sing in
              </button>
              <br />
           <Link to="/signup">Sign Up</Link>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;

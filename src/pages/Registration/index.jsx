import "./style.scss";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleRegistracija = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users', {
        username,
        password
      });
      console.log('Registracija uspešna:', response.data);
    } catch (error) {
      console.error('Greška prilikom registracije:', error);
    }
  };




  return (
    
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4 reg-title">Sing Up</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  class="form-control"
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
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Password.."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleRegistracija}>
                Sing Up
              </button>
              <p className="al-text">Already have an account?</p> <br />
              <Link to="/singin">Sign in</Link>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default Registration;

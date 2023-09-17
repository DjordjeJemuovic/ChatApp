import React from "react";
import "./style.scss";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="container">

        <div className="mainbtns">
          <button type="button" class="btn btn-primary btn-sm">
          <Link to="/singin">Sign in</Link>
          </button>
          <button type="button" class="btn btn-secondary btn-sm">
          <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;

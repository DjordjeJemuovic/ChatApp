import React from "react";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">

        <div className="mainbtns">
          <button type="button" class="btn btn-primary btn-sm">
            Sing in
          </button>
          <button type="button" class="btn btn-secondary btn-sm">
            Sing up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;

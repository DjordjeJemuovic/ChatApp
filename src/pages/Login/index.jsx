import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4 reg-title">Sing in</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="Username..."
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
                  required
                />
              </div>
           
              <button type="submit" className="btn btn-primary">
                Sing in
              </button>
              <p className="al-text">Create new Acount<a class="link-opacity-100" href="#">Sing up</a></p>
            </form>
          </div>
        </div>
      </div>
  );
};
export default Login;

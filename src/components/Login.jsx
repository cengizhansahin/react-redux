import React from "react";

function Login() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="shadow p-3 rounded bg-white w-25">
        <form>
          <div className="form-group my-3">
            <label htmlFor="username">Kullanıcı Adınız</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="usernameDescription"
              placeholder="Lütfen Kullanıcı Adınızı Giriniz."
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Parolanız</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Lütfen Parolanızı Giriniz"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

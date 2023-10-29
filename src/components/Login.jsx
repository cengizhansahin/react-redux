import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFail, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.token) {
    //       dispatch(loginSuccess(data.username));
    //       navigate("/");
    //     } else {
    //       navigate("/login");
    //       alert("Kullanıcı adınız veya parola hatalı.");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Giriş başarısız.");
    //   });
    /***************************************************************** */
    // try {
    //   const response = await axios.post("https://dummyjson.com/auth/login", {
    //     username,
    //     password,
    //   });
    //   // console.log(response);
    //   const data = response.data;
    //   // console.log(data);
    //   if (data) {
    //     dispatch(loginSuccess(data));
    //     navigate("/");
    //   } else {
    //     navigate("/login");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    /***************************************************************** */
    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        const data = res.data;
        if (data.token) {
          // console.log(data);
          dispatch(loginSuccess(data));
          navigate("/");
        } else {
          dispatch(loginFail("Kullanıcı adı veya parola hatalı."));
        }
      })
      .catch((err) => {
        dispatch(loginFail("Giriş başarısız: " + err.message));
      });
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="shadow p-3 rounded bg-white w-25">
        <form onSubmit={handleLogin}>
          <div className="form-group my-3">
            <label htmlFor="username">Kullanıcı Adınız</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="usernameDescription"
              placeholder="Lütfen Kullanıcı Adınızı Giriniz."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Parolanız</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Lütfen Parolanızı Giriniz"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

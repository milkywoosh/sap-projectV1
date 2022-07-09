import React, { useState } from "react";
import App from "../../App";
import "./style.css";

function Login(props) {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);


  const HandleOnChange = (event) => {
    event.preventDefault();
    setData((data) => {
      return {
        ...data,
        [event.target.name]: event.target.value,
      };
    });
  };
  const HandlerOnSubmit = (event) => {
    event.preventDefault()
    console.log("test", data);
    if (data.name !== "" && data.password === "lukmanganteng") {
      setIsValid(true);
    } else {
      setIsValid(false);
      alert("password salah bosq")

    }
  };

  const loginPage = (
    <div class="containerLogin ">
      <form onSubmit={HandlerOnSubmit}>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Name
            </span>
          </div>
          <input
            type="text"
            name="name"
            class="form-control"
            value={data.name}
            onChange={HandleOnChange}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Password
            </span>
          </div>
          <input
            type="password"
            name="password"
            class="form-control"
            value={data.password}
            onChange={HandleOnChange}
          />
        </div>
        <input type="submit" class="submitBtn" name="submit" />
      </form>
    </div>
  );
  const appPage = <App />;

  return isValid === true ? appPage : loginPage;
}

export default Login;

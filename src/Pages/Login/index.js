import React, { useState } from "react";
import App from "../../App";
import "./style.css";

function Login(props) {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);

  const whatDevice = () => {
    let details = navigator.userAgent;

    /* Creating a regular expression
      containing some mobile devices keywords
      to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details
      it returns boolean value*/
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
      // document.write("<h3>Its a Mobile Device !</h3>");
      console.log("is mobile");
    } else {
      console.log("is laptop");
      // document.write("<h3>Its a Desktop !</h3>");
    }
  };
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
    event.preventDefault();
    console.log("test", data);

    if (data.name !== "" && data.password === "lukmanganteng") {
      setIsValid(true);
    } else {
      setIsValid(false);
      alert("password salah bosq");
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

  let details = navigator.userAgent;

  /* Creating a regular expression
      containing some mobile devices keywords
      to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i;

  /* Using test() method to search regexp in details
      it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    return (
      <div class="containerLogin ">
        <div>
          <h1 className="tulisan">Buka webnya pake Komputer ya boss</h1>
        </div>
      </div>
    );
  } else {
    return isValid === true ? appPage : loginPage;
    // console.log("is laptop");
  }
}

export default Login;

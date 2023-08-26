import React, { useEffect, useState } from "react";
import "./Register.css"; // You should create a CSS file for styling
import { Link } from "react-router-dom";

function Register() {
  useEffect(() => {
    // Cursor position tracking
    function getCursorPosition(event) {
      const x = (event.clientX * 100) / window.innerWidth + "%";
      const y = (event.clientY * 100) / window.innerHeight + "%";

      const eyes1 = document.getElementById("eyes1");
      const eyes2 = document.getElementById("eyes2");

      eyes1.style.left = x;
      eyes1.style.top = y;
      eyes1.style.transform = `translate(-${x}, -${y})`;

      eyes2.style.left = x;
      eyes2.style.top = y;
      eyes2.style.transform = `translate(-${x}, -${y})`;
    }

    window.addEventListener("mousemove", getCursorPosition);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", getCursorPosition);
    };
  }, []);

  const [ageFocus, setAgeFocus] = useState(false);
  const [oldPasswordFocus, setOldPasswordFocus] = useState(false);
  const [newPasswordFocus, setNewPasswordFocus] = useState(false);

  const handleNameInput = (event) => {
    setNameFocus(event.target.value !== "");
  };

  const handleAgeInput = (event) => {
    setAgeFocus(event.target.value !== "");
  };

  const handleOldPasswordInput = (event) => {
    setOldPasswordFocus(event.target.value !== "");
  };

  const handleNewPasswordInput = (event) => {
    setNewPasswordFocus(event.target.value !== "");
  };
  return (
    <div className="wrapper">
      <main>
        <section>
          <div className="face">
            <img
              src="https://assets.codepen.io/9277864/PF.png"
              alt="Face"
              width="150"
              height="150"
            />
            <div className="eye-cover1">
              <div id="eyes1"></div>
            </div>

            <div className="eye-cover2">
              <div id="eyes2"></div>
            </div>
          </div>
          <div className="login-container">
            <div className="social-login">
              <div className="logo">
                <img
                  //   src="https://assets.codepen.io/9277864/robot-face-3.svg"
                  alt=""
                  width="100"
                  height="100"
                />
                <p>Gravam</p>
              </div>
              <div className="social-grp">
                <div className="btn">
                  <a href="#">
                    <img
                      src="https://assets.codepen.io/9277864/social-media-twitter.svg"
                      alt=""
                      width="32"
                      height="32"
                    />
                    <span>Twitter</span>
                  </a>
                </div>
                <div className="btn">
                  <a href="#">
                    <img
                      src="https://assets.codepen.io/9277864/social-media-facebook.svg"
                      alt=""
                      width="32"
                      height="32"
                    />
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="btn">
                  <a href="#">
                    <img
                      src="https://assets.codepen.io/9277864/social-media-google.svg"
                      alt=""
                      width="32"
                      height="32"
                    />
                    <span>Google</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="email-login">
              <div className="login-h-container">
                <h1>Create Your Account</h1>
                <p>
                  Already have an account?{" "}
                  <Link to="/login">Sign in Free!</Link>
                </p>
              </div>
              {/* <form>
                <label htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    autoComplete="off"
                  />
                  <span id="span-email">Email</span>
                </label>
                <label htmlFor="password">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder=""
                  />
                  <span id="span-password">Password</span>
                </label>
                <div className="recovery">
                  <div>
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a href="">Forgot Password?</a>
                </div>
                <input type="submit" value="Login with Email" />
              </form> */}
              <form>
                <label htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=""
                    autoComplete="off"
                    onChange={handleNameInput}
                  />
                  <span id="span-name">Name</span>
                </label>
                <label htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    autoComplete="off"
                  />
                  <span id="span-email">Email</span>
                </label>
                <label htmlFor="age">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder=""
                    onChange={handleAgeInput}
                  />
                  <span id="span-age">Age</span>
                </label>
                <label htmlFor="old-password">
                  <input
                    id="old-password"
                    name="old-password"
                    type="password"
                    placeholder=""
                    onChange={handleOldPasswordInput}
                  />
                  <span id="span-old-password">Old Password</span>
                </label>
                <label htmlFor="new-password">
                  <input
                    id="new-password"
                    name="new-password"
                    type="password"
                    placeholder=""
                    onChange={handleNewPasswordInput}
                  />
                  <span id="span-new-password">New Password</span>
                </label>
                <input type="submit" value="Generate Password" />
              </form>
            </div>
          </div>
        </section>
        <div className="vector-1"></div>
        <div className="vector-2"></div>
        <div className="vector-3"></div>
      </main>
    </div>
  );
}

export default Register;

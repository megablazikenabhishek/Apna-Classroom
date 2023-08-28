import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // You should create a CSS file for styling

function Login() {
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

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <img src="" alt="" width="100" height="100" />
                <p>Gravam</p>
              </div>
              <p>Login using social media to get quick access</p>
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
                <h1>Login to your account</h1>
                <p>
                  Don’t have an account?{" "}
                  <Link to={"/sign-up"}>Sign up Free!</Link>
                </p>
              </div>
              <form>
                <label htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span id="span-email">Email</span>
                </label>
                <label htmlFor="password">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
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

export default Login;

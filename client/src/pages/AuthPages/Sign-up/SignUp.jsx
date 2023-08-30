import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-root">
      <div
        className="signup-box-root flex-flex flex-direction--column"
        style={{ minHeight: "100vh", flexGrow: 1 }}
      >
        <div className="signup-background box-background--white padding-top--64">
          <div className="signup-background-gridContainer">
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "top / start / 8 / end" }}
            >
              <div
                className="signup-box-root"
                style={{
                  backgroundImage:
                    "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                  flexGrow: 1,
                }}
              ></div>
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "4 / 2 / auto / 5" }}
            >
              <div
                className="signup-box-root signup-box-divider--light-all-2 animationLeftRight tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "6 / start / auto / 2" }}
            >
              <div
                className="signup-box-root signup-box-background--blue800"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "7 / start / auto / 4" }}
            >
              <div
                className="signup-box-root signup-box-background--blue animationLeftRight"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "8 / 4 / auto / 6" }}
            >
              <div
                className="signup-box-root signup-box-background--gray100 animationLeftRight tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "2 / 15 / auto / end" }}
            >
              <div
                className="signup-box-root signup-box-background--cyan200 animationRightLeft tans4s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "3 / 14 / auto / end" }}
            >
              <div
                className="signup-box-root signup-box-background--blue animationRightLeft"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "4 / 17 / auto / 20" }}
            >
              <div
                className="signup-box-root signup-box-background--gray100 animationRightLeft tans4s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="signup-box-root flex-flex"
              style={{ gridArea: "5 / 14 / auto / 17" }}
            >
              <div
                className="signup-box-root signup-box-divider--light-all-2 animationRightLeft tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
          </div>
        </div>
        <div
          className="signup-box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexGrow: 1, zIndex: 9 }}
        >
          <div className="signup-box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>
              <a href="http://blog.stackfindover.com/" rel="dofollow">
                Stackfindover
              </a>
            </h1>
          </div>
          <div className="signup-formbg-outer">
            <div className="signup-formbg">
              <div className="signup-formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Create an account</span>
                <form id="stripe-signup">
                  <div className="signup-field padding-bottom--24">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="signup-field padding-bottom--24">
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" />
                  </div>
                  <div className="signup-field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                  </div>
                  <div className="signup-field padding-bottom--24">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input type="password" name="oldPassword" />
                  </div>
                  <div className="signup-field padding-bottom--24">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" name="newPassword" />
                  </div>
                  <div className="signup-field padding-bottom--24">
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Create Account"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="signup-footer-link padding-top--24">
              <span>
                Already have an account? <a href>Sign in</a>
              </span>
              <div className="signup-listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span>
                  <a href="#">© Stackfindover</a>
                </span>
                <span>
                  <a href="#">Contact</a>
                </span>
                <span>
                  <a href="#">Privacy &amp; terms</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

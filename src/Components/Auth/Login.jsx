import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import registerImage from "./img/register.svg";
import registerImageTwo from "./img/log.svg";
import { useState } from "react";
const Login = (props) => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      {/* <div classNameName="login-container">
        <div classNameName="header">Header login</div>
        <div classNameName="title col-4 mx-auto">Duc Minh Code</div>
        <div classNameName="welcome col-4 mx-auto">Hello,who's this?</div>
        <div classNameName="content-from col-4 mx-auto">
          <div classNameName="form-group">
            <label>Email</label>
            <input type={"email"} classNameName="form-control" />
          </div>
          <div classNameName="form-group">
            <label>Password</label>
            <input type={"password"} classNameName="form-control" />
          </div>
          <span>Forgot password ?</span>
          <div>
            <button>Login to DucMinCode</button>
          </div>
        </div>
      </div> */}
      <div className={`containerNew ${!show ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter">
                    <FontAwesomeIcon icon={faTwitch} />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google">
                    <FontAwesomeIcon icon={faGoogle} />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </i>
                </a>
              </div>
            </form>

            <form action="" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" className="btn solid" />

              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter">
                    <FontAwesomeIcon icon={faGoogle} />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google">
                    <FontAwesomeIcon icon={faGoogle} />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                minus natus est.
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  handleShow();
                }}
              >
                Sign Up
              </button>
            </div>
            <img src={registerImageTwo} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                minus natus est.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  handleShow();
                }}
              >
                Sign In
              </button>
            </div>

            <img src={registerImage} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

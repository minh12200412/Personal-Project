import "./SignUpAndIn.scss";
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
import { useNavigate } from "react-router-dom";
import { postLogin, postSignUp } from "../../Services/ApiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner9 } from "react-icons/im";
const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const disPatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPassWordSignUp] = useState("");
  const [userName, setUserName] = useState("");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      disPatch(doLogin(data));
      setIsLoading(false);
      navigate("/");
      toast.success(data.EM);
    } else {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    let isValidateEmail = validateEmail(emailSignUp);
    if (!isValidateEmail) {
      toast.error("🦄 Invalid Email!");
      return;
    }
    if (!passwordSignUp) {
      toast.error("🦄 Invalid Password");
      return;
    }

    let data = await postSignUp(emailSignUp, passwordSignUp, userName);
    if (data && data.EC === 0) {
      navigate("/login");
      setEmail(emailSignUp);
      setPassword(passwordSignUp);
      toast.success(data.EM);
    } else {
      toast.error(data.EM);
    }
  };
  const navigate = useNavigate();
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
                {/* <i className="fas fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Username" /> */}

                <i className="fas fa-envelope">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              {/* <input type="submit" value="Login" className="btn solid" /> */}
              <span>Forgot password ?</span>
              <button
                value="Login"
                className="btn solid"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading === true && <ImSpinner9 className="loaderIcon" />}

                <span className=""> Login</span>
              </button>

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
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input
                  type="email"
                  placeholder="Email"
                  value={emailSignUp}
                  onChange={(event) => setEmailSignUp(event.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  value={passwordSignUp}
                  onChange={(event) => setPassWordSignUp(event.target.value)}
                />
              </div>
              {/* <input type="submit" value="Sign Up" className="btn solid" /> */}
              <button
                value="Sign Up"
                className="btn solid"
                onClick={handleSignUp}
              >
                Sign Up
              </button>

              <p className="social-text">Or Sign up with social platforms</p>
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
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => navigate("/")}
              >
                Home Page
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
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => navigate("/")}
              >
                Home Page
              </button>
            </div>

            <img src={registerImage} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;

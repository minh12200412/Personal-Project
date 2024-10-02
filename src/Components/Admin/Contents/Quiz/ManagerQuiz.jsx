import "./ManagerQuiz.scss";
import Select from "react-select";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaAudioDescription } from "react-icons/fa";
import { MdUploadFile } from "react-icons/md";
import { FaSave } from "react-icons/fa";
const ManagerQuiz = () => {
  const options = [
    { value: "EASY", label: "EASY", classNameName: "option-a" },
    { value: "MEDIUM", label: "MEDIUM", classNameName: "option-a" },
    { value: "HARD", label: "HARD", classNameName: "option-a" },
  ];
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("EASY");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChangeFile = (even) => {
    if (even.target && even.target.files && even.target.files[0])
      setImage(even.target.files[0]);
  };
  return (
    <div className="quiz-container">
      <div className="container-quiz">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="row">
            <h4>Manager Quiz</h4>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => {
                  setName(event.preventDefault.value);
                }}
              />
              <div className="input-icon">
                <i className="fa fa-user">
                  <FaUserEdit size={"1.4em"} className="FaUserEdit" />
                </i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="email"
                placeholder="Description"
                value={description}
                onChange={(event) => {
                  setDescription(event.preventDefault.value);
                }}
              />
              <div className="input-icon">
                <i className="fa fa-envelope">
                  <FaAudioDescription size={"1.4em"} className="FaUserEdit" />
                </i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-half">
              <div className="input-group input-group-icon">
                <input
                  type="file"
                  onChange={(event) => handleChangeFile(event)}
                />
                <div className="input-icon">
                  <i className="fa fa-user">
                    <MdUploadFile size={"1.6em"} />
                  </i>
                </div>
              </div>
            </div>
            <div className="col-half">
              <div className="input-group">
                <Select
                  value={type}
                  // onChange={this.handleChange}
                  placeholder={"Quiz type.."}
                  options={options}
                  classNamePrefix="Select"
                />
              </div>
            </div>
            <div className="col-half">
              <div className="input-group input-group-icon">
                <button>Save</button>
                <div className="input-icon">
                  <i className="fa fa-user">
                    <FaSave size={"1.6em"} />
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </form>
      </div>
    </div>
  );
};
export default ManagerQuiz;

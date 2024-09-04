import "./ManagerQuiz.scss";
import Select from "react-select";
const ManagerQuiz = () => {
  const options = [
    { value: "EASY", label: "EASY", className: "option-a" },
    { value: "MEDIUM", label: "MEDIUM", className: "option-a" },
    { value: "HARD", label: "HARD", className: "option-a" },
  ];
  return (
    <div className="quiz-container">
      <div class="container-quiz">
        <form>
          <div class="row">
            <h4>Manager Quiz</h4>
            <div class="input-group input-group-icon">
              <input type="text" placeholder="Name" />
              <div class="input-icon">
                <i class="fa fa-user"></i>
              </div>
            </div>
            <div class="input-group input-group-icon">
              <input type="email" placeholder="Description" />
              <div class="input-icon">
                <i class="fa fa-envelope"></i>
              </div>
            </div>
          </div>
          <div class="row">
            <h4>Payment Details</h4>
            <div class="col-half">
              <div class="input-group input-group-icon">
                <input type="file" />
                <div class="input-icon">
                  <i class="fa fa-user"></i>
                </div>
              </div>
            </div>
            <div class="col-half">
              <div class="input-group">
                <Select
                  // value={selectedOption}
                  // onChange={this.handleChange}
                  placeholder={"Quiz type.."}
                  options={options}
                  classNamePrefix="Select"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ManagerQuiz;

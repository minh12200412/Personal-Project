import _ from "lodash";
const DetailQuestion = (prop) => {
  const { data, index } = prop;
  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleHandAnswers = (event, questionID, answersID) => {
    console.log("Test :", event.target.checked);
    // console.log(questionID + answersID);
    prop.handleCheckBox(questionID, answersID);
  };
  return (
    <>
      {data.image ? (
        <div className="body-q">
          <img src={`data:image/png;base64,${data.image}`} alt="" />
        </div>
      ) : (
        <div className="body-q"></div>
      )}
      <div className="question">
        Question{index}: {data.questionDescription}
      </div>
      <div className="answers">
        {data.answers &&
          data.answers.length &&
          data.answers.map((item, index) => {
            return (
              <div key={`answer${index}`} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked={item.isSelected}
                  onChange={(event) => {
                    handleHandAnswers(event, data.questionID, item.id);
                  }}
                />
                <label className="form-check-label">{item.description}</label>
              </div>
              //   <p key={`answers-${index}`} className="a-child">
              //     A-{item.description}
              //   </p>
            );
          })}
      </div>
    </>
  );
};
export default DetailQuestion;

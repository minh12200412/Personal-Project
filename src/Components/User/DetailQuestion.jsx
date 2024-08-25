import _ from "lodash";
const DetailQuestion = (prop) => {
  const { data, index } = prop;
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      {data.image && (
        <div className="body-q">
          <img src={`data:image/png;base64,${data.image}`} alt="" />
        </div>
      )}
      <div className="question">
        Question{index}: {data.questionDescription}
      </div>
      <div className="answers">
        {data.answers &&
          data.answers.length &&
          data.answers.map((item, index) => {
            return (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  {item.description}
                </label>
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

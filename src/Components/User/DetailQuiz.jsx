import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuizData, postAnswerUser } from "../../Services/ApiServices";
import "./DetailQuiz.scss";
import _ from "lodash";
import DetailQuestion from "./DetailQuestion";
import { useState } from "react";
import { set } from "nprogress";
import ModalResultAnswer from "./ModalResultAnswer";
const DetailQuiz = (props) => {
  const param = useParams();
  const quizId = param.id;
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (quizId) {
      getDataQuiz();
    }
  }, [quizId]);
  const location = useLocation();
  // console.log("location: ", location);
  const getDataQuiz = async () => {
    let res = await getQuizData(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            item.answers.isSelected = false;
            answers.push(item.answers);
          });
          return { questionID: key, answers, questionDescription, image };
        })
        .value();
      setDataQuiz(data);
    }
  };
  const handlePrev = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) {
      setIndex(index + 1);
    }
  };
  const handleCheckBox = (questionID, answersID) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find(
      (item) => +item.questionID === +questionID
    );
    if (question && question.answers) {
      question.answers = question.answers.map((item) => {
        if (+item.id === +answersID) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    }
    let index = dataQuizClone.findIndex(
      (item) => +item.questionID === +questionID
    );
    if (index > -1) {
      setDataQuiz(dataQuizClone);
    }
  };
  const [dataResult, setDataResult] = useState({});
  const handleFinishAnswer = async () => {
    //   {
    //     "quizId": 1,
    //     "answers": [
    //         {
    //             "questionId": 1,
    //             "userAnswerId": [3]
    //         },
    //         {
    //             "questionId": 2,
    //             "userAnswerId": [6]
    //         }
    //     ]
    // }
    console.log("dataFinish", dataQuiz);
    let dataPayLoad = {
      quizId: +quizId,
      answers: [],
    };
    let answers = [];
    if (dataQuiz && dataQuiz.length > 0) {
      dataQuiz.forEach((item) => {
        let userAnswerId = [];
        if (item.answers && item.answers.length > 0) {
          item.answers.forEach((item) => {
            if (item.isSelected == true) {
              userAnswerId.push(+item.id);
            }
          });
        }
        answers.push({
          questionId: +item.questionID,
          userAnswerId: userAnswerId,
        });
      });
    }
    dataPayLoad.answers = answers;
    console.log("dataPayLoad: ", dataPayLoad);
    let res = await postAnswerUser(dataPayLoad);
    console.log("check res: ", res);
    if (res && res.EC === 0) {
      SetIsShowResult(true);
      setDataResult(res.DT);
    } else {
      alert("something wrongs...");
    }
  };
  const [isShowResult, SetIsShowResult] = useState(false);
  return (
    <div className="detail-quiz-container">
      <div className="left-container">
        <div className="title">
          {" "}
          Quiz-{quizId}: {location?.state?.quizTitle}
        </div>
        <hr />
        <div className="content-q">
          <DetailQuestion
            data={dataQuiz[index]}
            handleCheckBox={handleCheckBox}
          />
        </div>
        <div className="footer">
          <button className="btn btn-primary" onClick={() => handlePrev()}>
            Prev
          </button>
          <button className="btn btn-primary" onClick={() => handleNext()}>
            Next
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleFinishAnswer()}
          >
            Finish
          </button>
          <ModalResultAnswer
            show={isShowResult}
            setShow={SetIsShowResult}
            dataResult={dataResult}
          />
        </div>
      </div>
      <div className="right-container">Content Right</div>
    </div>
  );
};
export default DetailQuiz;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuizData } from "../../Services/ApiServices";
import _ from "lodash";
const DetailQuiz = () => {
  const param = useParams();
  const quizId = param.id;
  useEffect(() => {
    if (quizId) {
      getDataQuiz();
    }
  }, [quizId]);
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
            answers.push(item.answers);
          });
          return { questionID: key, answers, questionDescription, image };
        })
        .value();
      console.log("check lodash:", data);
    }
  };
  console.log("check", param);
  return <>detail quiz</>;
};
export default DetailQuiz;

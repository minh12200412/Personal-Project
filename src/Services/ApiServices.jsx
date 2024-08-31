import axios from "../utils/AxiosCustomize";
const postCreateNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};
const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};
const deleteUsers = (useId) => {
  return axios.delete("api/v1/participant", { data: { id: useId } });
};
const getUsersWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};
const postLogin = (email, password) => {
  return axios.post("api/v1/login", { email, password, delay: 5000 });
};
const postSignUp = (email, password, username) => {
  return axios.post("api/v1/register", { email, password, username });
};
const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};
const getQuizData = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};
const postAnswerUser = async (data) => {
  console.log("check data api", { ...data });
  return axios.post("api/v1/quiz-submit", { ...data });
  // try {
  //   return await axios.post("/api/v1/quiz-submit", { ...data });
  // } catch (error) {
  //   console.error(
  //     "Lỗi khi gọi API: ",
  //     error.response ? error.response.data : error.message
  //   );
  //   return { EC: 1, EM: "Lỗi khi gửi dữ liệu" };
  // }
};
export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUsers,
  getUsersWithPaginate,
  postLogin,
  postSignUp,
  getQuizByUser,
  getQuizData,
  postAnswerUser,
};

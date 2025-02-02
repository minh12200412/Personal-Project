import App from "./App";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/Home/HomePage";
import ManagerUser from "./Components/Admin/Contents/ManagerUser";
import DashBoard from "./Components/Admin/Contents/Dashboard";
import Login from "./Components/Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Components/Auth/Signup";
import ListQuiz from "./Components/User/ListQuiz";
import DetailQuiz from "./Components/User/DetailQuiz";
import ManagerQuiz from "./Components/Admin/Contents/Quiz/ManagerQuiz";
const Layout = () => {
  const NotFound = () => {
    return (
      <div className="container mt-4 alert alert-danger">
        404-Not Found data with your current URL
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<ListQuiz />} />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manager-user" element={<ManagerUser />} />
          <Route path="manager-quiz" element={<ManagerQuiz />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;

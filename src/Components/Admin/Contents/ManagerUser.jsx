import ModalUser from "./ModalsUser";
import "./ManagerUser.scss";

const ManagerUser = (props) => {
  return (
    <div className="manager-user-container">
      <div className="title"></div>
      <div className="user-contents">
        <div>
          <button>Add</button>
        </div>
        <div>table contents</div>
        <ModalUser />
      </div>
    </div>
  );
};
export default ManagerUser;

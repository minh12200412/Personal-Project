import ModalUser from "./ModalsUser";
import Button from "react-bootstrap/Button";
import "./ManagerUser.scss";
import { FcPlus } from "react-icons/fc";

import { useState } from "react";
import TableUser from "./TableUser";

const ManagerUser = (props) => {
  const [ShowModalCreateUser, SetShowModalCreateUser] = useState(false);
  return (
    <div className="manager-user-container">
      <div className="title">MangerUser</div>
      <div className="user-contents">
        <div className="btn-add-user">
          <Button
            className="btn-add"
            variant="outline-info"
            onClick={() => {
              SetShowModalCreateUser(true);
            }}
          >
            <FcPlus /> Add new user
          </Button>
          <ModalUser
            show={ShowModalCreateUser}
            setShow={SetShowModalCreateUser}
          />
        </div>
        <div className="table-user">
          <TableUser />
        </div>
      </div>
    </div>
  );
};
export default ManagerUser;

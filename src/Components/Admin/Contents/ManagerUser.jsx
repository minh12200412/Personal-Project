import ModalUser from "./ModalsUser";
import Button from "react-bootstrap/Button";
import "./ManagerUser.scss";
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../Services/ApiServices";
import TableUser from "./TableUser";

const ManagerUser = (props) => {
  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let data = await getAllUsers();
    if (data.EC === 0) {
      console.log(data);
      SetListUser(data.DT);
    }
  };
  const [listUser, SetListUser] = useState([]);
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
            fetchListUsers={fetchListUsers}
          />
        </div>
        <div className="table-user">
          <TableUser listUser={listUser} />
        </div>
      </div>
    </div>
  );
};
export default ManagerUser;

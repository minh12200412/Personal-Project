import ModalUser from "./ModalsUser";
import ModalsUpdateUser from "./ModalsUpdateUser";
import ModalViewUser from "./ModalsViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
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
      SetListUser(data.DT);
    }
  };
  const [listUser, SetListUser] = useState([]);
  const [ShowModalCreateUser, SetShowModalCreateUser] = useState(false);
  const [ShowModalUpdateUser, SetShowModalUpdateUser] = useState(false);
  const [ShowModalViewUser, SetShowModalViewUser] = useState(false);
  const [ShowModalDeleteUser, SetShowModalDeleteUser] = useState(false);
  const [DataUpdate, SetDataUpdate] = useState({});
  const handleClickUpdateUser = (user) => {
    SetShowModalUpdateUser(true);
    SetDataUpdate(user);
  };
  const handleClickViewUser = (user) => {
    SetShowModalViewUser(true);
    SetDataUpdate(user);
  };
  const handleClickDelete = (user) => {
    console.log("dataDelete", user);
    SetShowModalDeleteUser(true);
    SetDataUpdate(user);
  };
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
          <TableUser
            listUser={listUser}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickViewUser={handleClickViewUser}
            handleClickDelete={handleClickDelete}
          />
          <ModalsUpdateUser
            show={ShowModalUpdateUser}
            setShow={SetShowModalUpdateUser}
            DataUpdate={DataUpdate}
            fetchListUsers={fetchListUsers}
            resetData={SetDataUpdate}
          />
          <ModalViewUser
            show={ShowModalViewUser}
            DataUpdate={DataUpdate}
            setShow={SetShowModalViewUser}
            resetDat
            resetData={SetDataUpdate}
          />
          <ModalDeleteUser
            show={ShowModalDeleteUser}
            setShow={SetShowModalDeleteUser}
            DataUpdate={DataUpdate}
            resetData={SetDataUpdate}
            fetchListUsers={fetchListUsers}
          />
        </div>
      </div>
    </div>
  );
};
export default ManagerUser;

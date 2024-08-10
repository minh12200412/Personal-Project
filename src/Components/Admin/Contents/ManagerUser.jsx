import ModalUser from "./ModalsUser";
import ModalsUpdateUser from "./ModalsUpdateUser";
import ModalViewUser from "./ModalsViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import Button from "react-bootstrap/Button";
import "./ManagerUser.scss";
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import {
  getAllUsers,
  getUsersWithPaginate,
} from "../../../Services/ApiServices";
import TableUser from "./TableUser";
import TableUserPaginate from "./TableUserPaginate";

const ManagerUser = (props) => {
  useEffect(() => {
    fetchListUsersWithPaginate(1);
  }, []);
  const fetchListUsers = async () => {
    let data = await getAllUsers();
    if (data.EC === 0) {
      SetListUser(data.DT);
    }
  };
  const fetchListUsersWithPaginate = async (page) => {
    let data = await getUsersWithPaginate(page, LIMIT_USER);
    if (data.EC === 0) {
      console.log(data.DT);
      SetListUser(data.DT.users);
      setPageCount(data.DT.totalPages);
    }
  };
  const [pageCount, setPageCount] = useState(0);
  const LIMIT_USER = 6;
  const [currentPage, setCurrentPage] = useState(1);
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
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="table-user">
          {/* <TableUser
            listUser={listUser}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickViewUser={handleClickViewUser}
            handleClickDelete={handleClickDelete}
          /> */}
          <TableUserPaginate
            listUser={listUser}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickViewUser={handleClickViewUser}
            handleClickDelete={handleClickDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <ModalsUpdateUser
            show={ShowModalUpdateUser}
            setShow={SetShowModalUpdateUser}
            DataUpdate={DataUpdate}
            fetchListUsers={fetchListUsers}
            resetData={SetDataUpdate}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
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
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
export default ManagerUser;

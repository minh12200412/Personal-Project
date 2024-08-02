import { useEffect, useState } from "react";
import { getAllUsers } from "../../../Services/ApiServices";
const TableUser = () => {
  const [listUser, SetListUser] = useState([]);
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
  return (
    <>
      <table class="table table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={4}>Not Found Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;

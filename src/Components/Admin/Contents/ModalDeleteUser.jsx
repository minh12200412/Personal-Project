import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalsUser.scss";
import { FcAddImage } from "react-icons/fc";
import { toast } from "react-toastify";
import { deleteUsers } from "../../../Services/ApiServices";

function Example(props) {
  const { show, setShow, DataUpdate } = props;
  // const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  // const handleShow = () => setShow(true);x
  const handleSubmitDeleteUser = async () => {
    let data = await deleteUsers(DataUpdate.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchListUsers();
      props.setCurrentPage(1);
      await props.fetchListUsersWithPaginate(1);
    } else {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="ModalDeleteUser"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete the user ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user, email:
          <p>{DataUpdate && DataUpdate.email ? DataUpdate.email : ""}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteUser();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalsUser.scss";
import { FcAddImage } from "react-icons/fc";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUploadFile = (even) => {
    console.log("up load");
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="ModalAddUser"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-md-6">
              <label for="inputUserName" className="form-label">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Role
              </label>
              <select className="form-select">
                <option selected value="USER">
                  User
                </option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              <label
                for="inputImage"
                className="form-label uploadFile"
                htmlFor="uploadFile"
              >
                <FcAddImage /> Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="uploadFile"
                onChange={(even) => {
                  handleUploadFile(even);
                }}
              />
            </div>
            <div className="col-md-12 img-preview">
              {/* <span>Preview Image</span> */}
              <img
                src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-nen-may-tinh-4k-de-thuong-scaled.jpg"
                alt=""
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

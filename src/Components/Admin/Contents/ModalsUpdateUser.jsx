import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalsUser.scss";
import { FcAddImage } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../Services/ApiServices";
import _ from "lodash";

function Example(props) {
  const { show, setShow, DataUpdate } = props;
  // const [show, setShow] = useState(false);
  const handleClose = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setShow(false);
    setPreviewImg("");
    props.resetData();
  };

  // const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  useEffect(() => {
    if (!_.isEmpty(DataUpdate)) {
      setEmail(DataUpdate.email);
      setUsername(DataUpdate.username);
      setRole(DataUpdate.role);
      setImage("");
      if (DataUpdate.image) {
        setPreviewImg(`data:image/jpeg;base64,${DataUpdate.image}`);
      }
    }
  }, [DataUpdate]);
  const handleUploadFile = (even) => {
    if (even.target && even.target.files && even.target.files[0]) {
      setImage(even.target.files[0]);
      setPreviewImg(URL.createObjectURL(even.target.files[0]));
    } else {
      setPreviewImg("");
    }
  };
  const handCreateNewUser = async () => {
    let data = await putUpdateUser(DataUpdate.id, username, role, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListUsers();
    } else {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="ModalAddUser"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
                onChange={(even) => {
                  setEmail(even.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
                onChange={(even) => {
                  setPassword(even.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label for="inputUserName" className="form-label">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(even) => {
                    setUsername(even.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                onChange={(even) => {
                  setRole(even.target.value);
                }}
                value={role}
              >
                <option value="USER">User</option>
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
              {previewImg ? (
                <img src={previewImg} alt="" />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handCreateNewUser();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

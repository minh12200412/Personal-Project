import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FcAddImage } from "react-icons/fc";
import { toast } from "react-toastify";

function ResultAnswer(props) {
  const { show, setShow, dataResult } = props;
  // const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  // const handleShow = () => setShow(true);x
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
          <div>
            Total Question: <b>{dataResult.countTotal}</b>
          </div>
          <div>
            Total Correct Question: <b>{dataResult.countCorrect}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Show Answer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResultAnswer;

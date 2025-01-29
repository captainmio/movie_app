import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


type PropsType = {
  btnLabel?: string,
  title: string,
  message: string,
  onConfirm: (value: string | null) => void,
  value?: string,
  btnClass?: string
};


const ConfirmModal = (props: PropsType) => {
  const {btnLabel, title, message, onConfirm, value, btnClass} = props
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
    <Button variant="primary" onClick={handleShow} className={btnClass}>
      {btnLabel}
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {
          handleClose();
          onConfirm(value ?? null);
        }}>
          {btnLabel}
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default ConfirmModal;

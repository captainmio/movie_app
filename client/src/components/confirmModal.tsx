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


const ConfirmModal: React.FC<PropsType> = ({btnLabel, title, message, onConfirm, value, btnClass}) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
    <Button onClick={handleShow} className={btnClass}>
      {btnLabel}
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button className={btnClass} onClick={() => {
          handleClose();
          onConfirm(value ?? null);
        }}>
          {btnLabel}
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default ConfirmModal;

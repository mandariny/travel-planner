import Modal from 'react-bootstrap/Modal';
import LoginJoinTab from './LoginJoinTab';
import classes from './LoginJoinModal.module.css'

const LoginModal = (props) => {
    return (
        <>
            <Modal 
                aria-labelledby="contained-modal-title-vcenter"
                centered show={props.show} onHide={props.onHide}>
                <div className={classes.modal__header} onClick={props.onHide}>
                    X
                </div>
                <Modal.Body>
                    <LoginJoinTab />
                </Modal.Body>
                
            </Modal>
        </>
    )
}

export default LoginModal
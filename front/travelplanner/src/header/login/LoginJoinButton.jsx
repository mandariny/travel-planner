import LoginModal from './LoginJoinModal';
import { useState } from 'react';
import classes from './LoginJoinButton.module.css';

const LoginButton = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    
    const loginModalOnClick = () => {
        setLoginModalOpen(true)
    };

    const loginModalOnClose = () => {
        setLoginModalOpen(false)
    };

    return (
        <>
            <div onClick={loginModalOnClick}>
                로그인 | 회원가입
            </div>
            <LoginModal className={classes.modal} show={loginModalOpen} onHide={loginModalOnClose}/>
        </>
    )
}

export default LoginButton
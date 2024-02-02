import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import Join from './Join';
import classes from './LoginJoinTab.module.css'

const LoginJoinTab = (props) => {

    const [loginTabOpen, setLoginTabOpen] = useState(true);

    return (
        <>
            <Nav onSelect={function(keys){
                (keys == "/login") ? (
                    setLoginTabOpen(true)
                ):(
                    setLoginTabOpen(false)
                )
            }} fill variant="tabs" defaultActiveKey="/login">
                <Nav.Item>
                    <Nav.Link eventKey="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/join">Join</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className={classes.nav__main}>
                {(loginTabOpen) ? (
                    <Login/>
                ):(
                    <Join/>
                )}
            </div>
        </>
    )
}

export default LoginJoinTab
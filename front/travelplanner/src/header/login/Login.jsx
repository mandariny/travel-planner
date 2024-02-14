import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Login = () => {
    const BASE_URL = 'http://localhost:8080/api/auth/login'

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const loginHandler = async (data) => {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: data.id, 
                password: data.password 
            })
        }).then((res) => {
            if(res.ok){
                res.json().then((res2 => {
                    sessionStorage.setItem('USER', res2.id);
                    window.location.reload();
                }))
            }else{
                window.alert("로그인 실패");
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await loginHandler({
            id: id,
            password: password
        })
    };

    return (
        <>
            {/* <InputGroup className="mb-3">
                <Form.Control
                placeholder="id"
                aria-label="id"
                aria-describedby="basic-addon2"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon2"
                />
            </InputGroup> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID: </label>
                    <input type="text" value={id} onChange={handleIdChange} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">로그인</button>
            </form>
        </>
    )
}

export default Login
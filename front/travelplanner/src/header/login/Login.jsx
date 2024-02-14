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
                    sessionStorage.setItem('USER', res2.accessToken);
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
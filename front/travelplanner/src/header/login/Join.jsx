import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Join = () => {
    const BASE_URL = 'http://localhost:8080/api/auth/join'

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleIdCheck = async (e) => {
        e.preventDefault();

        await fetch(BASE_URL + "/id", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: id
        }).then((res) => {
            if(res.ok) window.alert("사용 가능한 아이디입니다.");
            else window.alert("중복된 아이디입니다.");
        })
    };

    const handleNicknameCheck = async (e) => {
        e.preventDefault();

        await fetch(BASE_URL + "/nickname", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: nickname
        }).then((res) => {
            if(res.ok) window.alert("사용 가능한 닉네임입니다.");
            else window.alert("중복된 닉네임입니다.");
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                loginId: id,
                password: password,
                nickname: nickname
            })
        }).then((res) => {
            if(res.ok){
                res.json().then((res2 => {
                    sessionStorage.setItem('USER', res2.accessToken);
                    window.location.reload();
                }))
            }else{
                window.alert("회원가입 실패");
            }
        })
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID: </label>
                    <input type="text" value={id} onChange={handleIdChange} />
                    <button type="button" onClick={handleIdCheck}>중복 확인</button>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label>Nickname: </label>
                    <input type="text" value={nickname} onChange={handleNicknameChange} />
                    <button type="button" onClick={handleNicknameCheck}>중복 확인</button>
                </div>
                <button type="submit">회원가입</button>
            </form>
        </>
    )
}

export default Join
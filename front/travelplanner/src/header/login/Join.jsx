import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Join = () => {
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

    const handleIdCheck = () => {
        // 여기서 id 중복 확인 로직을 추가하면 됩니다.
        console.log('아이디 중복 확인:', id);
    };

    const handleNicknameCheck = () => {
        // 여기서 닉네임 중복 확인 로직을 추가하면 됩니다.
        console.log('닉네임 중복 확인:', nickname);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 여기서 회원가입 로직을 추가하면 됩니다.
        console.log('회원가입 정보:', { id, password, nickname });
    };

    return (
        <>
            {/* <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                placeholder="id"
                aria-label="id"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                중복확인
                </Button>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                placeholder="nickname"
                aria-label="nickname"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                중복확인
                </Button>
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
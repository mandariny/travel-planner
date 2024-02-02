import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Login = () => {
    return (
        <>
            <InputGroup className="mb-3">
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
            </InputGroup>
        </>
    )
}

export default Login
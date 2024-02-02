import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Join = () => {
    return (
        <>
            <InputGroup className="mb-3">
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
            </InputGroup>
        </>
    )
}

export default Join
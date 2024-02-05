import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Search = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="search"
                aria-label="search"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                검색
                </Button>
            </InputGroup>
        </>
    )
}

export default Search
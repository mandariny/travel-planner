import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Search = () => {
    

    return (
        <>
            {/* <InputGroup className="mb-3" >
                <Form.Control
                placeholder="search"
                aria-label="search"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                검색
                </Button>
            </InputGroup> */}
            <input
                type="text"
                // onChange={handleChange}
                placeholder="검색어를 입력하세요..."
            />
            {/* 검색 버튼 */}
            <button>검색</button>
        </>
    )
}

export default Search
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Search = () => {
    const [word, setWord] = useState('')
    const navigate = useNavigate();

    return (
        <>
            <input
                type="text"
                // onChange={handleChange}
                placeholder="검색어를 입력하세요..."
                onChange={(e)=>{
                    setWord(e.target.value);
                }}
            />
            {/* 검색 버튼 */}
            <button onClick={()=>{
                navigate("/search/" + word)
            }}>검색</button>
        </>
    )
}

export default Search
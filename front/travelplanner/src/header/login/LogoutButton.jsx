import { Link } from 'react-router-dom';

const LogoutButton = () => {
    return (
        <>
            <div onClick={() => {
                sessionStorage.removeItem('USER')

                window.location.reload();
            }}>
                <Link to="/">로그아웃</Link>
            </div>
            
        </>
    )
}

export default LogoutButton
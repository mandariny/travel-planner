const LogoutButton = () => {
    return (
        <>
            <div onClick={() => {
                sessionStorage.removeItem('USER')

                window.location.reload();
            }}>
                로그아웃
            </div>
            
        </>
    )
}

export default LogoutButton
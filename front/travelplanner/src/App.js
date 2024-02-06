import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './main/Main';
import MyPage from './mypage/MyPage';
import SearchPage from './searchpage/SearchPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/mypage" element={<MyPage/>} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

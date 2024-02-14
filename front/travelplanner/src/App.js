import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './main/Main';
import MyPage from './mypage/MyPage';
import SearchPage from './searchpage/SearchPage';
import PlanForm from './plan/PlanForm';
import Detail from './plan/Detail';
import UpdateForm from './plan/UpdateForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/mypage" element={<MyPage/>} />
          <Route exact path="/search/:query" element={<SearchPage />} />
          <Route exact path="/plan" element={<PlanForm/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path='/update/:id' element={<UpdateForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

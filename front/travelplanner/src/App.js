import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './main/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

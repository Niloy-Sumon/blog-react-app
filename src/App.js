import './App.css';
import Home from './components/pages/home/Home';
import LogIn from './components/pages/LogIn/LogIn';
import Register from './components/pages/Register/Register';
import Setting from './components/pages/Setting/Setting';
import Write from './components/pages/Write/Write';
import Single from './components/Single/Single';
import TopBar from './components/topBar/TopBar';
import NotMatch from './components/NotMatch/NotMatch';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
    <TopBar></TopBar>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/register" element={currentUser ? <Home /> : <Register />}>
        </Route>
        <Route path="/login" element={currentUser ? <Home /> : <LogIn />}>
        </Route>
        <Route path="/post/:id" element={<Single />}>
        </Route>
        <Route path="/write" element={currentUser ? <Write /> : <LogIn/>} >
        </Route>
        <Route path="/settings" element={currentUser ? <Setting /> : <LogIn />}>
        </Route>
        <Route path="*" element={<NotMatch />} />
    </Routes>







        {/*
        <Route path="/settings">
          {currentUser ? <Setting /> : <LogIn />}
        </Route> */}
        {/* <Route path="*" element={<NotMatch></NotMatch>} /> */}
      {/* <Header></Header> */}
      {/* <Home></Home> */}
      {/* <Single></Single> */}
      {/* <Write></Write> */}
      {/* <Setting></Setting> */}
      {/* <LogIn></LogIn>
      <Register></Register> */}
    </BrowserRouter>
  );
}

export default App;

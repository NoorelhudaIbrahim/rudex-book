import Signup from './Register';
import Login from "./Login";
import { Provider } from 'react-redux';
import store from './store';
import React from 'react'
import './App.css'
import CreateBook from './pages/AddBook/AddBookForm';
import EditBook from './pages/AddBook/EditBookForm copy';

import Header from './components/Header/Header'
import EditProfile from './pages/MyProfile/EditProfile'
import Home from './pages/Home/Home'
import MyProfile from './pages/MyProfile/MyProfile'

import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
// import Users from "./users";



function App() {
  return (
    <BrowserRouter>
    <>
    <Provider store={store}>
<Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Signup />}/>
        <Route exact path="/AddBookForm" element={<CreateBook/>}/>
        <Route exact path="/EditBookForm" element={<EditBook/>}/>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/profile/:id/edit' element={<EditProfile/>}/>

        </Routes>
        </Provider>
        </>

    </BrowserRouter>
  );
}

export default App;

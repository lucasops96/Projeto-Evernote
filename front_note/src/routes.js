import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './screens/home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/notes/index'
import UserEdit from './screens/users/edit'

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" exact element={<Home/>} />
                <Route  path="/register" exact element={<Register/>} />
                <Route  path="/login" exact element={<Login/>} />
                <Route  path="/notes" exact element={<NotesIndex/>} />
                <Route  path="/users/edit" exact element={<UserEdit/>} />
            </Routes>
        </BrowserRouter>
    );
}

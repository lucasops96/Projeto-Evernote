import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './screens/home';

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" exact element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

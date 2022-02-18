import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from '../App'
import Login from '../pages/Login'
import List from '../pages/List'


export default (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="login" element={<Login />}></Route>
                <Route path="list/:listId" element={<List />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
// React
import React from "react";

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {< SearchPage/>} />
                <Route path = "/history" element = {<HistoryPage />} />
                <Route path ="*" element = {<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
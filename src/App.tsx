import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import UserListPage from './components/pages/UserListPage';
import Navbar from './components/molecules/Navbar';
const App: React.FC = () => {
    return (
        <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Navigate to="/users" replace />} />
                <Route path="/users" element={<UserListPage />} />
            </Routes>


        </Router>
    );
};

export default App;

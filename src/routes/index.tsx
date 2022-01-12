import { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { IsAuthenticated } from '../services/auth';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <RequireAuth redirectTo="/login">
                    <Dashboard />
                </RequireAuth>
            } />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />

        </Routes>
    )
}


function RequireAuth({ children, redirectTo }: {children: ReactElement, redirectTo: string}, ) {
    let isAuthenticated = IsAuthenticated();
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
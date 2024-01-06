import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Join from '../pages/Join';
import Login from '../pages/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

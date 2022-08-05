import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import SignupPage from './routes/SchoolSignup';
import LoginPage from './routes/Login';
import SchoolPage from './routes/School';
import StudentPage from './routes/Student';
import FeaturesPage from './routes/Features';
import ErrorPage from './routes/Error';
import SignupComp from './routes/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeptorsList from './routes/DeptorsList';
import DeptorsSearch from './routes/DeptorsSearch';
import DebtorsContend from './routes/DebtorsContend';
import AddDebtor from './routes/AddDebtor';
import Dashboard from './routes/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='register' element={<SignupPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='school' element={<SchoolPage />} />
        <Route path='student' element={<StudentPage />} />
        <Route path='signup' element={<SignupComp />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='adddeptor' element={<AddDebtor />} />
        <Route path='deptorlist' element={<DeptorsList />} />
        <Route path='deptorsearch' element={<DeptorsSearch />} />
        <Route path='deptorcontend' element={<DebtorsContend />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

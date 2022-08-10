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
// import DeptorsSearch from './routes/DeptorsSearch';
import DebtorsContend from './routes/DebtorsContend';
import AddDebtor from './routes/AddDebtor';
import Dashboard from './routes/Dashboard';
import DashboardProfile from './routes/DashboardProfile';
import SchoolRegistration from './routes/SchoolRegistration';
import SchoolList from './routes/SchoolList';
import Documentation from './routes/Documentation';
import Notifications from './routes/Notifications';
import DashboardProfileUpdate from './routes/DashboardProfileUpdate';
import ContendForm from './routes/ContendForm';
import ForgotPassword from './routes/ForgotPassword';
import UpdateDebtor from './routes/UpdateDebtor';
import DocumentationPlain from './routes/DocumentationPlain';

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
        <Route path='signin' element={<LoginPage />} />
        <Route path='school' element={<SchoolPage />} />
        <Route path='student' element={<StudentPage />} />
        <Route path='signup' element={<SignupComp />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='update-debtor' element={<UpdateDebtor />} />
        <Route path='dashboard' element={<Dashboard />} />

        <Route path='/admin/adddebtor' element={<AddDebtor />} />
        <Route path='/admin/contend' element={<DebtorsContend />} />
        <Route path='/contend' element={<ContendForm />} />
        <Route path='/admin/listdebtors' element={<DeptorsList />} />
        <Route path='/admin/listschools' element={<SchoolList />} />
        <Route path='/admin/notifications' element={<Notifications />} />
        <Route path='/admin/profile' element={<DashboardProfile />} />
        <Route
          path='/admin/profile/update'
          element={<DashboardProfileUpdate />}
        />
        <Route path='documentation' element={<Documentation />} />

        <Route path='schoolreg' element={<SchoolRegistration />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

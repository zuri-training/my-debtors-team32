import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import SignupPage from './routes/Signup';
import LoginPage from './routes/Login';
import SchoolPage from './routes/School';
import StudentPage from './routes/Student';
import FeaturesPage from './routes/Features';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
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
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

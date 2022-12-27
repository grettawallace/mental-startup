import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import IdeaOnboard from "./pages/IdeaOnboard";
import NextSteps from "./pages/NextSteps";
import ProjectOnboard from "./pages/ProjectOnboard";
import SignUp from "./pages/SignUp";
import UpdateProfile from "./pages/UpdateProfile";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="idea_onboard" element={<IdeaOnboard />} />
      <Route path="next_steps" element={<NextSteps />} />
      <Route path="project_onboard" element={<ProjectOnboard/>} />
      <Route path="signup" element={<SignUp />} />
      <Route path="update_profile" element={<UpdateProfile />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

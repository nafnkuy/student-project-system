import React from 'react'; // import React  
import ReactDOM from 'react-dom/client'; // import สำหรับ render React ลง DOM (หน้าเว็บจริง)
import './index.css'; // import CSS หลักของทั้งแอป
import App from './App'; // import component หลักของระบบ (ตัวที่รวมทุกหน้า)
import { BrowserRouter } from "react-router-dom"; // import Router สำหรับจัดการ URL / หน้าเว็บ (SPA)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

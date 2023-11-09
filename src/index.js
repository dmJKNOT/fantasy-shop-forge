import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FSFMainPage} from "./components/FSFMainPage";
import BootStrapTemplateStyles from './css/bootstrap_template_styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <FSFMainPage/>
  </React.StrictMode>
);
reportWebVitals();

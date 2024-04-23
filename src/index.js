import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header as='h1'>蘇小羽</Header>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Root from './Root';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Root />
    </Layout>
  </React.StrictMode>
);

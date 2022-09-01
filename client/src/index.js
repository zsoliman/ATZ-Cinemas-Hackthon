import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Root from './Root';
import './styles/index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-59caw0g9.us.auth0.com'
    clientId='WIpWWKJP7xiszbKYzDEoBpmi23cCZXDD'
    redirectUri='http://localhost:4000/home'>
      <Layout>
        <Root />
      </Layout>
  </Auth0Provider>
);

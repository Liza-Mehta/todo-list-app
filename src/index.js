import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ConvexProvider, ConvexReactClient } from 'convex/react';

// Use your Convex deployment URL from `.env.local` or copy-paste it here
const convex = new ConvexReactClient(process.env.REACT_APP_CONVEX_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);

reportWebVitals();

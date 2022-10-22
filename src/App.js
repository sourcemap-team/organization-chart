import React from 'react';

import './styles/app.scss';

import { OrgChart } from './components/OrgChart/OrgChart';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Team</h1>
      </div>
      <div className="chartWrapper">
        <OrgChart />
      </div>
    </div>
  );
}

export default App;

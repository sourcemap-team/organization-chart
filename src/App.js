import React from 'react';
import styles from './App.module.scss';

import { OrgChart } from './components/OrgChart/OrgChart';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1>Team</h1>
      </div>
      <div className={styles.chartWrapper}>
        <OrgChart />
      </div>
    </div>
  );
}

export default App;

import styles from './TransformActions.module.scss';
import React from 'react';

export const TransformActions = ({ transformProps }) => {
  return (
    <div className={styles.actions}>
      <button
        className={styles.controlBtn}
        onClick={() => transformProps.zoomIn()}
      >
        +
      </button>
      <button
        className={styles.controlBtn}
        onClick={() => transformProps.zoomOut()}
      >
        -
      </button>
      <button
        className={styles.controlBtn}
        onClick={() => transformProps.resetTransform()}
      >
        Reset
      </button>
    </div>
  );
};

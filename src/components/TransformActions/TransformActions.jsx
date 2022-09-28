import styles from './TransformActions.module.scss';
import React from 'react';

export const TransformActions = ({ transformProps }) => {
  return (
    <div className={styles.actions}>
      <button className={styles.controlBtn}>
        <img src="/icons/info.svg" alt="Info" />
      </button>
      <button
        className={styles.controlBtn}
        onClick={() => transformProps.zoomIn()}
      >
        <img src="/icons/plus.svg" alt="+" />
      </button>
      <button
        className={styles.controlBtn}
        onClick={() => transformProps.zoomOut()}
      >
        <img src="/icons/minus.svg" alt="-" />
      </button>
      <button
        className={styles.controlBtn}
        onClick={() => transformProps.resetTransform()}
      >
        <img src="/icons/reset.svg" alt="reset" />
      </button>
    </div>
  );
};

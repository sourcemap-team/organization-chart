import styles from './TransformActions.module.scss';
import React from 'react';
import { LARGE_SCALE } from '../../constants/TransformParams';

export const TransformActions = ({ transformProps, data }) => {
  const { zoomToElement, zoomIn } = transformProps;
  const teamIds = Object.keys(data);

  const moveToTeamCard = (teamId) => {
    zoomIn(LARGE_SCALE, 100);
    setTimeout(() => {
      zoomToElement(teamId, LARGE_SCALE, 200);
    }, 200);
  };

  return (
    <div>
      <div className={styles.teamNavigator}>
        {teamIds.map((teamId) => (
          <div
            key={teamId}
            className={styles.teamLabel}
            onClick={() => moveToTeamCard(teamId)}
          >
            {data[teamId].title}
          </div>
        ))}
      </div>
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
    </div>
  );
};

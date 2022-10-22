import React from 'react';

import {
  LARGE_SCALE,
  MIDDLE_SCALE,
  MIN_SCALE,
} from '../../constants/TransformParams';

import styles from './TransformActions.module.scss';
import { GroupTitles } from '../../constants/OrgStructure';

export const TransformActions = ({ transformProps, data }) => {
  const { zoomToElement, zoomIn } = transformProps;
  const teamIds = Object.values(data);

  const moveToTeamCard = (teamId) => {
    zoomIn(MIN_SCALE, 100);
    setTimeout(() => {
      zoomToElement(
        teamId,
        teamId === GroupTitles.Leadership ? MIDDLE_SCALE : LARGE_SCALE,
        200
      );
    }, 200);
  };

  return (
    <div>
      <div className={styles.teamNavigator}>
        {teamIds.map((teamId, idx) => (
          <div
            key={teamId}
            className={styles.teamLabel}
            onClick={() => moveToTeamCard(teamId)}
          >
            {teamId}
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

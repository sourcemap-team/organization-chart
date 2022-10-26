import React from 'react';

import { LARGE_SCALE } from '../../constants/TransformParams';

import styles from './TransformActions.module.scss';

export const TransformActions = ({ transformProps, data }) => {
  const { zoomToElement, zoomIn } = transformProps;
  const groupIds = data.map((group) => group.name);

  const getGroupNameByGroupId = (id) => {
    return data.find((group) => group.name === id).name;
  };

  const moveToTeamCard = (groupId) => {
    zoomIn(LARGE_SCALE, 100);
    setTimeout(() => {
      zoomToElement(groupId, LARGE_SCALE, 200);
    }, 200);
  };

  return (
    <div>
      <div className={styles.teamNavigator}>
        {groupIds.map((groupId) => (
          <div
            key={groupId}
            className={styles.teamLabel}
            onClick={() => moveToTeamCard(groupId)}
          >
            {getGroupNameByGroupId(groupId)}
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

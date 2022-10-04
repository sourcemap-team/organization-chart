import React, { useState } from 'react';
import cx from 'classnames';
import styles from './TeamCard.module.scss';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { MAX_SCALE, SIZES } from '../../constants/TransformParams';
import { UsersGroup } from '../UsersGroup/UsersGroup';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';
import { getScaleSizeClassNameByScale } from '../../utils/scale';

export const TeamCard = ({ id, data, transformProps }) => {
  const { settings, users, title, groups } = data;
  const { zoomToElement, resetTransform, state } = transformProps;
  const { scale } = state;
  const { background } = settings;

  const [classNameSize, setClassNameSize] = useState(
    getScaleSizeClassNameByScale(state.scale)
  );
  const hasUsers = !!data.users;

  const handleDoubleClick = () => {
    return scale >= SIZES.M
      ? resetTransform()
      : zoomToElement(id, MAX_SCALE, 500);
  };

  useDebouncedEffect(
    () => {
      setClassNameSize(getScaleSizeClassNameByScale(scale));
    },
    [scale],
    100
  );

  return (
    <div
      id={id}
      className={cx(styles.card, styles[classNameSize])}
      onDoubleClick={handleDoubleClick}
      style={{ backgroundColor: background }}
    >
      <h3>{title}</h3>
      <div className={styles.users}>
        {hasUsers
          ? users.map((user) => (
              <UserAvatar
                key={user.id}
                user={user}
                transformProps={transformProps}
              />
            ))
          : null}
      </div>
      {Array.isArray(groups) && groups.length > 1 && (
        <div className={styles.groups}>
          {groups?.map((group) => (
            <UsersGroup
              key={group.id}
              title={group.title}
              users={group.users}
              transformProps={transformProps}
            />
          ))}
        </div>
      )}
    </div>
  );
};

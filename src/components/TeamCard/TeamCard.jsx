import React from 'react';
import cx from 'classnames';
import styles from './TeamCard.module.scss';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { MAX_SCALE } from '../../constants/TransformParams';
import { UsersGroup } from '../UsersGroup/UsersGroup';

export const TeamCard = ({ id, data, transformProps }) => {
  const { settings, users, title, groups } = data;
  const { zoomToElement, resetTransform } = transformProps;
  const { background } = settings;

  const hasUsers = !!data.users;

  const hasBigSize = transformProps.state.scale >= MAX_SCALE;

  const size = hasBigSize ? 'l' : 'm';

  const handleDoubleClick = () => {
    return hasBigSize ? resetTransform() : zoomToElement(id, MAX_SCALE, 500);
  };

  return (
    <div
      id={id}
      className={cx(styles.card, styles[size])}
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
    </div>
  );
};

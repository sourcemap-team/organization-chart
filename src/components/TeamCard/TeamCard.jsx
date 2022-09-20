import React from 'react';
import cx from 'classnames';
import styles from './TeamCard.module.scss';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { MAX_SCALE } from '../../constants/TransformParams';
import { UsersGroup } from '../UsersGroup/UsersGroup';

export const TeamCard = ({ id, data, transformProps }) => {
  const { zoomToElement, resetTransform } = transformProps;

  const hasUsers = !!data.users;

  const hasBigSize = transformProps.state.scale >= MAX_SCALE;

  const size = hasBigSize ? 'l' : 'm';

  const handleDoubleClick = () => {
    return hasBigSize ? resetTransform() : zoomToElement(id, MAX_SCALE);
  };

  return (
    <div id={id} className={cx(styles.card)} onDoubleClick={handleDoubleClick}>
      <h3>{data.title}</h3>
      <div className={styles.users}>
        {hasUsers
          ? data.users.map((user) => (
              <UserAvatar
                key={user.id}
                user={user}
                transformProps={transformProps}
              />
            ))
          : null}
      </div>
      <div className={styles.groups}>
        {data.groups?.map((group) => (
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

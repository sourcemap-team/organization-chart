import styles from './UsersGroup.module.scss';
import React from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

export const UsersGroup = ({ title, users, transformProps }) => {
  return (
    <div className={styles.groupWrapper}>
      <h4>{title}</h4>
      <div className={styles.group}>
        {users &&
          users.map((user) => {
            return (
              <UserAvatar
                key={user.id}
                user={user}
                transformProps={transformProps}
              />
            );
          })}
      </div>
    </div>
  );
};

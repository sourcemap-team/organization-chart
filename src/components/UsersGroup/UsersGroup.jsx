import styles from './UsersGroup.module.scss';
import React from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';

export const UsersGroup = ({ users, transformProps }) => {
  return (
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
  );
};

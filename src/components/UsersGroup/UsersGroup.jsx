import styles from './UsersGroup.module.scss';
import cx from 'classnames';
import React, { useState } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { getScaleSizeClassNameByScale } from '../../utils/scale';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';

export const UsersGroup = ({ title, users, transformProps }) => {
  const { scale } = transformProps.state;
  const [classNameSize, setClassNameSize] = useState(
    getScaleSizeClassNameByScale(scale)
  );

  useDebouncedEffect(
    () => {
      setClassNameSize(getScaleSizeClassNameByScale(scale));
    },
    [scale],
    100
  );

  return (
    <div className={cx(styles.groupWrapper, styles[classNameSize])}>
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

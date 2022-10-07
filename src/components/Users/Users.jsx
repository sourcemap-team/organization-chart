import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Users.module.scss';
import { getScaleSizeClassNameByScale } from '../../utils/scale';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { SIZES_VALUES } from '../../constants/TransformParams';

export const Users = ({ users, transformProps }) => {
  const { scale } = transformProps.state;
  const [classNameSize, setClassNameSize] = useState(
    getScaleSizeClassNameByScale(scale)
  );

  const getMaxUsersLength = () => {
    if (classNameSize === SIZES_VALUES.S) {
      return 4;
    }

    if (classNameSize === SIZES_VALUES.M) {
      return 6;
    }

    if (classNameSize === SIZES_VALUES.L) {
      return 12;
    }
  };

  useDebouncedEffect(
    () => {
      setClassNameSize(getScaleSizeClassNameByScale(scale));
    },
    [scale],
    100
  );

  const visibleUsers = users ? users.slice(0, getMaxUsersLength()) : [];

  const hasHiddenUsers = users ? users.length > visibleUsers.length : false;
  const hiddenUsersCount = users ? users.length - visibleUsers.length : 0;

  return (
    <div className={cx(styles.users, styles[classNameSize])}>
      {visibleUsers &&
        visibleUsers.map((user) => {
          return (
            <UserAvatar
              key={user.id}
              user={user}
              transformProps={transformProps}
            />
          );
        })}
      {hasHiddenUsers && (
        <div className={styles.label}>{`+${hiddenUsersCount}`}</div>
      )}
    </div>
  );
};

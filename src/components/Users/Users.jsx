import React, { useCallback, useMemo, useState } from 'react';
import cx from 'classnames';

import { UserAvatar } from '../UserAvatar/UserAvatar';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';
import { SIZES_VALUES } from '../../constants/TransformParams';
import { getScaleSizeClassNameByScale } from '../../utils/scale';

import styles from './Users.module.scss';

export const Users = ({ users, transformProps, hierarchical }) => {
  const { scale } = transformProps.state;
  const [classNameSize, setClassNameSize] = useState(
    getScaleSizeClassNameByScale(scale)
  );

  const getMaxUsersLength = () => {
    if (classNameSize === SIZES_VALUES.S) return 3;

    if (classNameSize === SIZES_VALUES.M) return 6;

    return users?.length || 0;
  };

  useDebouncedEffect(() => {
    setClassNameSize(getScaleSizeClassNameByScale(scale));
  }, [scale]);

  const totalUsers = users ? users.length : 0;

  const visibleUsers = users ? users.slice(0, getMaxUsersLength()) : [];

  const hasHiddenUsers = totalUsers > visibleUsers.length;

  const hiddenUsersCount = useMemo(() => {
    if (!hasHiddenUsers) return 0;
    return totalUsers - visibleUsers.length;
  }, [hasHiddenUsers, totalUsers, visibleUsers.length]);

  return (
    <div
      className={cx(
        styles.users,
        styles[classNameSize],
        hierarchical && styles.hierarchical
      )}
    >
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
        <div className={styles.label}>+ {hiddenUsersCount}</div>
      )}
    </div>
  );
};

import React, { useMemo, useState } from 'react';
import cx from 'classnames';

import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';
import { SIZES } from '../../constants/TransformParams';
import { getScaleSizeClassNameByScale } from '../../utils/scale';

import styles from './UserAvatar.module.scss';

export const UserAvatar = ({ user, transformProps }) => {
  const { scale } = transformProps.state;
  const showUserInfo = scale >= SIZES.M;
  const [classNameSize, setClassNameSize] = useState(
    getScaleSizeClassNameByScale(scale)
  );

  const jsxUserName = useMemo(() => {
    const [first, last] = user.fullName.split(' ');
    return (
      <>
        <span>{first}</span>
        <span>{last}</span>
      </>
    );
  }, [user]);

  useDebouncedEffect(
    () => {
      setClassNameSize(getScaleSizeClassNameByScale(scale));
    },
    [scale],
    100
  );

  return (
    <div className={cx(styles.avatar, styles[classNameSize])}>
      <img
        src={
          user.avatar ||
          `https://randomuser.me/api/portraits/men/${user.id}.jpg`
        }
        alt={user.userName}
      />
      {showUserInfo && (
        <div className={styles.info}>
          <div className={styles.userName}>{jsxUserName}</div>
          <div className={styles.role}>{user.role}</div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import cx from 'classnames';
import styles from './UserAvatar.module.scss';
import { SIZES } from '../../constants/TransformParams';
import { getScaleSizeClassNameByScale } from '../../utils/scale';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';

export const UserAvatar = ({ user, transformProps }) => {
  const { scale } = transformProps.state;
  const showUserInfo = scale >= SIZES.M;
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
    <div className={cx(styles.avatar, styles[classNameSize])}>
      <img
        src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
        alt={user.userName}
      />
      {showUserInfo && (
        <div className={styles.info}>
          <div className={styles.userName}>{user.userName}</div>
          <div className={styles.role}>{user.role}</div>
        </div>
      )}
    </div>
  );
};

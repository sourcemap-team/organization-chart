import styles from './UsersGroup.module.scss';
import cx from 'classnames';
import React, { useState } from 'react';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { getScaleSizeClassNameByScale } from '../../utils/scale';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';
import { SIZES } from '../../constants/TransformParams';
import { Users } from '../Users/Users';

export const UsersGroup = ({ title, users, groups, transformProps, deep }) => {
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

  const theme = deep % 2 === 1 ? 'gray' : 'white';

  return (
    <div
      className={cx(styles.groupWrapper, styles[classNameSize], styles[theme])}
    >
      <h4>{title}</h4>
      <div className={styles.group}>
        <Users users={users} transformProps={transformProps} />
        <div className={styles.groupsWrapper}>
          {groups &&
            groups.map((group) => (
              <UsersGroup
                key={group.id}
                title={group.title}
                users={group.users}
                deep={deep + 1}
                groups={group.groups}
                transformProps={transformProps}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

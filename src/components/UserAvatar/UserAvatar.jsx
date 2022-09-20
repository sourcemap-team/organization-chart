import React from 'react';
import cx from 'classnames';
import styles from './UserAvatar.module.scss';
import { MAX_SCALE } from '../../constants/TransformParams';

export const UserAvatar = ({ user, transformProps }) => {
  const hasBigSize = transformProps.state.scale >= MAX_SCALE / 2;

  const size = hasBigSize ? 'l' : 'm';
  return (
    <div className={cx(styles.avatar, styles[size])}>
      <img src={user.pic} alt={user.userName} />
    </div>
  );
};

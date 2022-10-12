import React, { useState } from 'react';
import cx from 'classnames';
import styles from './TeamCard.module.scss';
import { LARGE_SCALE, SIZES } from '../../constants/TransformParams';
import { UsersGroup } from '../UsersGroup/UsersGroup';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect';
import { getScaleSizeClassNameByScale } from '../../utils/scale';
import { Users } from '../Users/Users';
import { HierarchicalTree } from '../HierarchicalTree/HierarchicalTree';

export const TeamCard = ({ id, data, transformProps }) => {
  const { settings, users, title, groups, hierarchical } = data;
  const { zoomToElement, resetTransform, state } = transformProps;
  const { scale } = state;
  const { background } = settings;

  const [classNameSize, setClassNameSize] = useState(
    getScaleSizeClassNameByScale(state.scale)
  );
  const handleDoubleClick = () => {
    return scale >= SIZES.M
      ? resetTransform()
      : zoomToElement(id, LARGE_SCALE, 300);
  };

  useDebouncedEffect(
    () => {
      setClassNameSize(getScaleSizeClassNameByScale(scale));
    },
    [scale],
    100
  );

  return (
    <div
      id={id}
      className={cx(styles.card, styles[classNameSize])}
      onDoubleClick={handleDoubleClick}
      style={{ backgroundColor: background }}
    >
      <h3>{title}</h3>
      {hierarchical ? (
        <div>
          <HierarchicalTree data={data} transformProps={transformProps} />
        </div>
      ) : (
        <div>
          <Users users={users} transformProps={transformProps} />

          {Array.isArray(groups) && groups.length > 1 && (
            <div className={styles.groups}>
              {groups?.map((group) => (
                <UsersGroup
                  key={group.id}
                  deep={0}
                  hierarchical={hierarchical}
                  title={group.title}
                  users={group.users}
                  groups={group.groups}
                  transformProps={transformProps}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

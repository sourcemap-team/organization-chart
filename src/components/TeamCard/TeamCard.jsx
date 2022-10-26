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
  const { users, settings, name, groups, type } = data;
  const { background } = settings;
  const { zoomToElement, resetTransform, state } = transformProps;
  const { scale } = state;

  const hasHierarchicalType = type === 'Hierarchical';

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
      <h3>{name}</h3>
      {hasHierarchicalType ? (
        <div>
          <HierarchicalTree data={data} transformProps={transformProps} />
        </div>
      ) : (
        <>
          <Users users={users} transformProps={transformProps} />

          {Array.isArray(groups) && groups.length > 1 && (
            <div className={styles.groups}>
              {groups?.map((group) => (
                <UsersGroup
                  key={group.id}
                  deep={0}
                  hierarchical={hasHierarchicalType}
                  name={group.name}
                  users={group.users}
                  groups={group.groups}
                  transformProps={transformProps}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

import React, { useMemo } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import cn from 'classnames';

import { Users } from '../Users/Users';
import { LARGE_SCALE, SIZES } from '../../constants/TransformParams';

import styles from './HeirarchicalTree.module.scss';

const TreeGroup = ({ id, group, transformProps }) => {
  const {
    zoomToElement,
    resetTransform,
    state: { scale },
  } = transformProps;
  const { users, groups } = group;

  const groupClassName = useMemo(
    () => group?.settings?.className,
    [group?.settings?.className]
  );

  const handleDoubleClick = () => {
    return scale >= SIZES.M
      ? resetTransform()
      : zoomToElement(group.id, LARGE_SCALE, 300);
  };

  return (
    <TreeNode
      label={
        <>
          {group.title && <h3 id={id}>{group.title}</h3>}
          <Users hierarchical users={users} transformProps={transformProps} />
        </>
      }
      className={cn(styles.node, styles[groupClassName])}
      onDoubleClick={handleDoubleClick}
    >
      {groups &&
        groups.map((group) => (
          <TreeGroup
            key={group.id}
            group={group}
            transformProps={transformProps}
          />
        ))}
    </TreeNode>
  );
};

export const HierarchicalTree = ({ data, transformProps }) => {
  const { users, groups } = data;
  return (
    <Tree
      lineWidth={'2px'}
      label={
        <Users hierarchical users={users} transformProps={transformProps} />
      }
    >
      {groups.map((group, idx) => (
        <TreeGroup
          id={group.id}
          key={group.title + '-' + idx}
          group={group}
          transformProps={transformProps}
        />
      ))}
    </Tree>
  );
};

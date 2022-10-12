import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Users } from '../Users/Users';

const TreeGroup = ({ group, transformProps }) => {
  const { users, groups } = group;

  return (
    <TreeNode
      label={
        <Users hierarchical users={users} transformProps={transformProps} />
      }
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
      {groups.map((group) => (
        <TreeGroup
          key={group.id}
          group={group}
          transformProps={transformProps}
        />
      ))}
    </Tree>
  );
};

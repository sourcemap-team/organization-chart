export const GroupTitles = {
  Leadership: 'leadership',
  Product: 'product',
  Data: 'data',
  Support: 'support',
  Marketing: 'marketing',
};

const mockUsers = [
  {
    id: 1,
    userName: 'Ivan Inav',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
    role: 'Backend',
  },
  {
    id: 2,
    userName: 'Dmitry Dmitry',
    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
    role: 'Lead',
  },
  {
    id: 3,
    userName: 'John Week',
    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    role: 'Design',
  },
  {
    id: 4,
    userName: 'Dmitry Dmitry',
    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
    role: 'Lead',
  },
  {
    id: 5,
    userName: 'Ivan Inav',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
    role: 'Backend',
  },
  {
    id: 6,
    userName: 'John Week',
    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    role: 'Design',
  },
  {
    id: 7,
    userName: 'Ivan Inav',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
    role: 'Backend',
  },
  {
    id: 8,
    userName: 'Dmitry Dmitry',
    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
    role: 'Lead',
  },
  {
    id: 9,
    userName: 'John Week',
    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    role: 'Design',
  },
  {
    id: 10,
    userName: 'Dmitry Dmitry',
    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
    role: 'Lead',
  },
  {
    id: 11,
    userName: 'Ivan Inav',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
    role: 'Backend',
  },
  {
    id: 12,
    userName: 'John Week',
    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    role: 'Design',
  },
];

export const MOCK_DATA = {
  [GroupTitles.Leadership]: {
    id: GroupTitles.Leadership,
    title: 'Leadership Team',
    hierarchical: true,
    settings: {
      background: '#DAF3FF',
    },
    users: [
      {
        id: 1,
        userName: 'Ivan Inav',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
        role: 'CEO',
      },
      {
        id: 2,
        userName: 'Dmitry Dmitry',
        pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
        role: 'CPO',
      },
      {
        id: 3,
        userName: 'John Week',
        pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
        role: 'CFO',
      },
      {
        id: 4,
        userName: 'Ivan Inav',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
        role: 'CEO',
      },
      {
        id: 5,
        userName: 'Ivan Inav',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
        role: 'CEO',
      },
    ],
    groups: [
      {
        id: GroupTitles.Product,
        title: 'Product group',
        hierarchical: true,
        settings: {
          background: '#CDEFC5',
          className: GroupTitles.Product,
        },
        users: [
          {
            id: 1,
            userName: 'Ivan Inav',
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
            role: 'Design',
          },
          {
            id: 2,
            userName: 'Dmitry Dmitry',
            pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
            role: 'Design',
          },
          {
            id: 3,
            userName: 'John Week',
            pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            role: 'Design',
          },
          {
            id: 4,
            userName: 'John Week',
            pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            role: 'Design',
          },
          {
            id: 5,
            userName: 'John Week',
            pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            role: 'Design',
          },
          {
            id: 6,
            userName: 'John Week',
            pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            role: 'Design',
          },
        ],
        groups: [
          {
            id: '1',
            title: 'Inbox',
            groups: [
              {
                id: '1',
                title: 'Tenet',
                users: [
                  {
                    id: 1,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 2,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 3,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 4,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 5,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 6,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 7,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 8,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 9,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 10,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 11,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 12,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                ],
              },
              {
                id: '2',
                title: 'Chemists',
                users: [
                  {
                    id: 13,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 14,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 15,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 16,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 17,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 18,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 19,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 20,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 21,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 22,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 23,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 24,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                ],
              },
            ],
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '2',
            title: 'Marketing automation',
            groups: [
              {
                id: '1',
                title: 'Tenet',
                users: [
                  {
                    id: 1,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 2,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 3,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                ],
              },
              {
                id: '2',
                title: 'Chemists',
                users: [
                  {
                    id: 1,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 2,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 3,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                ],
              },
            ],
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '3',
            title: 'Inbox',
            groups: [
              {
                id: '1',
                title: 'Tenet',
                users: [
                  {
                    id: 1,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 2,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 3,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 4,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 5,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 6,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 7,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 8,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 9,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 10,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 11,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 12,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                ],
              },
              {
                id: '2',
                title: 'Chemists',
                users: [
                  {
                    id: 1,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 2,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 3,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 4,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 5,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 6,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 7,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 8,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 9,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                  {
                    id: 10,
                    userName: 'Dmitry Dmitry',
                    pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                    role: 'Lead',
                  },
                  {
                    id: 11,
                    userName: 'Ivan Inav',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                  {
                    id: 12,
                    userName: 'John Week',
                    pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                    role: 'Design',
                  },
                ],
              },
            ],
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '4',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
        ],
      },
      {
        id: GroupTitles.Data,
        title: 'Data & Analytics',
        hierarchical: true,
        settings: {
          background: '#FFE287',
          className: GroupTitles.Data,
        },
        users: [
          {
            id: 56,
            userName: 'Vyacheslav Busarov',
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
            role: 'Head',
          },
        ],
        groups: [
          {
            id: '1',
            title: 'Inbox',
            users: [
              {
                id: 45,
                userName: 'Helen Smeyan',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
            ],
            groups: [
              {
                id: 12,
                title: '',
                users: [
                  {
                    id: 83,
                    userName: 'Merkuryev Mikhail',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                ],
                groups: [
                  {
                    id: '1124',
                    title: '',
                    users: [
                      {
                        id: 33,
                        userName: 'Merkuryev Mikhail',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                  {
                    id: '1121234',
                    title: '',
                    users: [
                      {
                        id: 33,
                        userName: 'Merkuryev Mikhail',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                  {
                    id: '1121231234',
                    title: '',
                    users: [
                      {
                        id: 33,
                        userName: 'Merkuryev Mikhail',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                ],
              },
              {
                id: '123',
                title: '',
                users: [
                  {
                    id: 1,
                    userName: 'Yakusheva Anna',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                ],
                groups: [
                  {
                    id: '1234',
                    title: '',
                    users: [
                      {
                        id: 51,
                        userName: 'Ivan Inav',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                  {
                    id: '1234324',
                    title: '',
                    users: [
                      {
                        id: 31,
                        userName: 'Ivan Inav',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: '2',
            title: 'Inbox',
            users: [
              {
                id: 28,
                userName: 'Savenkov Philip',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
            ],
            groups: [
              {
                id: 12,
                title: '',
                users: [
                  {
                    id: 83,
                    userName: 'Merkuryev Mikhail',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                ],
                groups: [
                  {
                    id: '1124',
                    title: '',
                    users: [
                      {
                        id: 33,
                        userName: 'Merkuryev Mikhail',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                  {
                    id: '1121234',
                    title: '',
                    users: [
                      {
                        id: 33,
                        userName: 'Merkuryev Mikhail',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                  {
                    id: '1121231234',
                    title: '',
                    users: [
                      {
                        id: 33,
                        userName: 'Merkuryev Mikhail',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                ],
              },
              {
                id: '123',
                title: '',
                users: [
                  {
                    id: 1,
                    userName: 'Yakusheva Anna',
                    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                    role: 'Backend',
                  },
                ],
                groups: [
                  {
                    id: '1234',
                    title: '',
                    users: [
                      {
                        id: 51,
                        userName: 'Ivan Inav',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                  {
                    id: '1234324',
                    title: '',
                    users: [
                      {
                        id: 31,
                        userName: 'Ivan Inav',
                        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                        role: 'Backend',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: GroupTitles.Support,
        title: 'Customer Support & Success',
        hierarchical: true,
        settings: {
          background: '#FF9E72',
          className: GroupTitles.Support,
        },
        users: [
          {
            id: 98,
            userName: 'Ivan Inav',
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
            role: 'Design',
          },
        ],
        groups: [
          {
            id: '1',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 4,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 5,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 6,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 7,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 8,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 9,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 10,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 11,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 12,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '2',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 4,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 5,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 6,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 7,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 8,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 9,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 10,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 11,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 12,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '3',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 4,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 5,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 6,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 7,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 8,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 9,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 10,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 11,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 12,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '4',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 4,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 5,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 6,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 7,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 8,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 9,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 10,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 11,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 12,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
        ],
      },
      {
        id: GroupTitles.Marketing,
        title: 'Marketing',
        settings: {
          background: '#E3D1F5',
          className: GroupTitles.Marketing,
        },
        groups: [
          {
            id: '1',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 4,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 5,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 6,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 7,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 8,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 9,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 10,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 11,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 12,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '2',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 4,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 5,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 6,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 7,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 8,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 9,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 10,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 11,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 12,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
          {
            id: '3',
            title: 'Inbox',
            users: [
              {
                id: 1,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 2,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 3,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 4,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 5,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 6,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 7,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 8,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 9,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
              {
                id: 10,
                userName: 'Dmitry Dmitry',
                pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
                role: 'Lead',
              },
              {
                id: 11,
                userName: 'Ivan Inav',
                pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
                role: 'Backend',
              },
              {
                id: 12,
                userName: 'John Week',
                pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
                role: 'Design',
              },
            ],
          },
        ],
      },
    ],
  },
  // product: {
  //   title: 'Product group',
  //   hierarchical: true,
  //   settings: {
  //     background: '#CDEFC5',
  //   },
  //   users: [
  //     {
  //       id: 1,
  //       userName: 'Ivan Inav',
  //       pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //       role: 'Design',
  //     },
  //     {
  //       id: 2,
  //       userName: 'Dmitry Dmitry',
  //       pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //       role: 'Design',
  //     },
  //     {
  //       id: 3,
  //       userName: 'John Week',
  //       pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //       role: 'Design',
  //     },
  //     {
  //       id: 4,
  //       userName: 'John Week',
  //       pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //       role: 'Design',
  //     },
  //     {
  //       id: 5,
  //       userName: 'John Week',
  //       pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //       role: 'Design',
  //     },
  //     {
  //       id: 6,
  //       userName: 'John Week',
  //       pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //       role: 'Design',
  //     },
  //   ],
  //   groups: [
  //     {
  //       id: '1',
  //       title: 'Inbox',
  //       groups: [
  //         {
  //           id: '1',
  //           title: 'Tenet',
  //           users: [
  //             {
  //               id: 1,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 2,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 3,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 4,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 5,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 6,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 7,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 8,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 9,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 10,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 11,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 12,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //           ],
  //         },
  //         {
  //           id: '2',
  //           title: 'Chemists',
  //           users: [
  //             {
  //               id: 13,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 14,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 15,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 16,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 17,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 18,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 19,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 20,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 21,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 22,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 23,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 24,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //           ],
  //         },
  //       ],
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '2',
  //       title: 'Marketing automation',
  //       groups: [
  //         {
  //           id: '1',
  //           title: 'Tenet',
  //           users: [
  //             {
  //               id: 1,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 2,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 3,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //           ],
  //         },
  //         {
  //           id: '2',
  //           title: 'Chemists',
  //           users: [
  //             {
  //               id: 1,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 2,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 3,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //           ],
  //         },
  //       ],
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '3',
  //       title: 'Inbox',
  //       groups: [
  //         {
  //           id: '1',
  //           title: 'Tenet',
  //           users: [
  //             {
  //               id: 1,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 2,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 3,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 4,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 5,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 6,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 7,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 8,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 9,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 10,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 11,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 12,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //           ],
  //         },
  //         {
  //           id: '2',
  //           title: 'Chemists',
  //           users: [
  //             {
  //               id: 1,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 2,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 3,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 4,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 5,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 6,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 7,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 8,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 9,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //             {
  //               id: 10,
  //               userName: 'Dmitry Dmitry',
  //               pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //               role: 'Lead',
  //             },
  //             {
  //               id: 11,
  //               userName: 'Ivan Inav',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //             {
  //               id: 12,
  //               userName: 'John Week',
  //               pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //               role: 'Design',
  //             },
  //           ],
  //         },
  //       ],
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '4',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // data: {
  //   title: 'Data & Analytics',
  //   hierarchical: true,
  //   settings: {
  //     background: '#FFE287',
  //   },
  //   users: [
  //     {
  //       id: 56,
  //       userName: 'Vyacheslav Busarov',
  //       pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //       role: 'Head',
  //     },
  //   ],
  //   groups: [
  //     {
  //       id: '1',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 45,
  //           userName: 'Helen Smeyan',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //       ],
  //       groups: [
  //         {
  //           id: 12,
  //           title: '',
  //           users: [
  //             {
  //               id: 83,
  //               userName: 'Merkuryev Mikhail',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //           ],
  //           groups: [
  //             {
  //               id: '1124',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 33,
  //                   userName: 'Merkuryev Mikhail',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //             {
  //               id: '1121234',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 33,
  //                   userName: 'Merkuryev Mikhail',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //             {
  //               id: '1121231234',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 33,
  //                   userName: 'Merkuryev Mikhail',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           id: '123',
  //           title: '',
  //           users: [
  //             {
  //               id: 1,
  //               userName: 'Yakusheva Anna',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //           ],
  //           groups: [
  //             {
  //               id: '1234',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 51,
  //                   userName: 'Ivan Inav',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //             {
  //               id: '1234324',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 31,
  //                   userName: 'Ivan Inav',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: '2',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 28,
  //           userName: 'Savenkov Philip',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //       ],
  //       groups: [
  //         {
  //           id: 12,
  //           title: '',
  //           users: [
  //             {
  //               id: 83,
  //               userName: 'Merkuryev Mikhail',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //           ],
  //           groups: [
  //             {
  //               id: '1124',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 33,
  //                   userName: 'Merkuryev Mikhail',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //             {
  //               id: '1121234',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 33,
  //                   userName: 'Merkuryev Mikhail',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //             {
  //               id: '1121231234',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 33,
  //                   userName: 'Merkuryev Mikhail',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           id: '123',
  //           title: '',
  //           users: [
  //             {
  //               id: 1,
  //               userName: 'Yakusheva Anna',
  //               pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //               role: 'Backend',
  //             },
  //           ],
  //           groups: [
  //             {
  //               id: '1234',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 51,
  //                   userName: 'Ivan Inav',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //             {
  //               id: '1234324',
  //               title: '',
  //               users: [
  //                 {
  //                   id: 31,
  //                   userName: 'Ivan Inav',
  //                   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //                   role: 'Backend',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // support: {
  //   title: 'Customer Support & Success',
  //   hierarchical: true,
  //   settings: {
  //     background: '#FF9E72',
  //   },
  //   users: [
  //     {
  //       id: 98,
  //       userName: 'Ivan Inav',
  //       pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //       role: 'Design',
  //     },
  //   ],
  //   groups: [
  //     {
  //       id: '1',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 4,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 5,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 6,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 7,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 8,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 9,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 10,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 11,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 12,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '2',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 4,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 5,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 6,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 7,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 8,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 9,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 10,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 11,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 12,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '3',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 4,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 5,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 6,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 7,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 8,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 9,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 10,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 11,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 12,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '4',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 4,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 5,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 6,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 7,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 8,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 9,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 10,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 11,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 12,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // marketing: {
  //   title: 'Marketing',
  //   settings: {
  //     background: '#E3D1F5',
  //   },
  //   groups: [
  //     {
  //       id: '1',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 4,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 5,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 6,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 7,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 8,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 9,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 10,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 11,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 12,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '2',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 4,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 5,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 6,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 7,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 8,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 9,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 10,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 11,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 12,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //     {
  //       id: '3',
  //       title: 'Inbox',
  //       users: [
  //         {
  //           id: 1,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 2,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 3,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 4,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 5,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 6,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 7,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 8,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 9,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //         {
  //           id: 10,
  //           userName: 'Dmitry Dmitry',
  //           pic: 'https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1',
  //           role: 'Lead',
  //         },
  //         {
  //           id: 11,
  //           userName: 'Ivan Inav',
  //           pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZrY2oBOhXShBBonWAzjKK9SgMASWsmsptYmJiU9Xr6tsNmxjZXZOp0wKZuesIM3jZZk&usqp=CAU',
  //           role: 'Backend',
  //         },
  //         {
  //           id: 12,
  //           userName: 'John Week',
  //           pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  //           role: 'Design',
  //         },
  //       ],
  //     },
  //   ],
  // },
};

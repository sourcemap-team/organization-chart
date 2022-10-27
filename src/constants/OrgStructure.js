/* eslint-disable */

const IVAN_PANFILOV = {
  id: 337,
  fullName: 'Панфилов Иван',
  avatar:
    'https://sourcemap.myjetbrains.com/hub/api/rest/avatar/f218e14a-0c9f-42c7-b0d8-0c8a5b483039?etag=MjctNDEw&s=40&dpr=2.200000047683716&v=1',
  role: 'PM',
  type: 'employee',
};

const AKULENKO_DARIA = {
  id: 336,
  fullName: 'Акуленко Дарья',
  avatar:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F8c7b0380-3968-4366-8b42-a3eeb7257ce6%2FGroup_292.png?width=60&userId=b63b4d20-ac55-4694-9eee-2ce47e07bfd7&cache=v2',
  role: 'Operations',
  type: 'employee',
};

const BABANOV_ROMAN = {
  id: 335,
  fullName: 'Бабанов Роман',
  avatar:
    'https://sun1-28.userapi.com/s/v1/ig2/KdMmSy-WatwbHgTAtX_dDgkRn2eLtJ_R-LIj8cf-8cRnObBq1omo52sOhyt80BX8nxxHLQRl_Ph7On4E-dViE6Ce.jpg?size=200x200&quality=95&crop=279,435,735,735&ava=1',
  role: 'Owner',
  type: 'employee',
};

const VALIEV_MIKHAIL = {
  id: 567,
  fullName: 'Валиев Михаил',
  avatar:
    'https://sourcemap.myjetbrains.com/hub/api/rest/avatar/f9ff29d1-a05d-4eea-84ad-65fb5c3f1202?etag=MjctNTYw&s=40&dpr=2.200000047683716&v=1',
  role: 'Tech lead',
  type: 'employe',
};

const KIRILL_TURCHINSKY = {
  id: 5,
  fullName: 'Кирилл Турчинский',
  avatar: null,
  role: 'Back',
  type: 'employe',
};

const ROSTISLAV_BARTENEV = {
  id: 43,
  fullName: 'Ростислав Бартенев',
  avatar:
    'https://sourcemap.myjetbrains.com/hub/api/rest/avatar/9ec27004-2c2f-4622-9268-db5011083e46?etag=MjctODQ%3D&s=40&dpr=2.200000047683716&v=1',
  role: 'Front lead',
  type: 'employe',
};

const EKATERINA_SHABALINA = {
  id: 64,
  fullName: 'Шабалина Екатерина',
  avatar:
    'https://sourcemap.myjetbrains.com/hub/api/rest/avatar/a91e481d-87eb-4df1-91b4-0f00708185e3?etag=MjctMzE2&s=40&dpr=2.200000047683716&v=1',
  role: 'Front',
  type: 'employe',
};

const PAVEL_RAKHAEV = {
  id: 48,
  fullName: 'Павел Рахаев',
  avatar:
    'https://sourcemap.myjetbrains.com/hub/api/rest/avatar/3339f4ce-31f1-4407-b911-43ebe8d3c1c4?etag=MjctNDEz&s=40&dpr=2.200000047683716&v=1',
  role: 'Front',
  type: 'employe',
};

const MAXIMOV_ALEX = {
  id: 74,
  fullName: 'Алексей Максимов',
  avatar:
    'https://sourcemap.myjetbrains.com/hub/api/rest/avatar/f6263a70-5c30-4514-b89f-0a6318a605a4?etag=MjctNDc5&s=40&dpr=2.200000047683716&v=1',
  role: 'Back',
  type: 'employe',
};

const BATOV_ANDREY = {
  id: 64,
  fullName: 'Батов Андрей',
  avatar:
    'https://sun1-98.userapi.com/s/v1/if1/a0VZjgJBupSdffEZb5KT40Y5mgXE3bWJmF1u-5KD6SqVeGDGPOpEePCposjO8Rl-E-HGEbDj.jpg?size=400x400&quality=96&crop=0,637,1365,1365&ava=1',
  role: 'Front lead',
  type: 'employe',
};

const ALEX_LAFAKI = {
  id: 124,
  fullName: 'Лафаки Александр',
  avatar:
    'https://sourcemap.myjetbrains.com/hub/api/rest/avatar/8692c228-f2fd-4abf-8131-51d1c2ddd19b?etag=MjctNTg0&s=40&dpr=2.200000047683716&v=1',
  role: 'Design',
  type: 'employe',
};

export const MOCK_DATA_BACK = [
  {
    id: 3,
    name: 'Product groups',
    type: 'Product',
    settings: { background: '#CDEFC5' },
    users: [BABANOV_ROMAN, AKULENKO_DARIA],
    groups: [
      {
        id: 4,
        name: 'Connect team',
        type: 'Product',
        settings: { background: null },
        users: [
          BABANOV_ROMAN,
          VALIEV_MIKHAIL,
          IVAN_PANFILOV,
          KIRILL_TURCHINSKY,
          ROSTISLAV_BARTENEV,
          PAVEL_RAKHAEV,
        ],
      },
      {
        id: 5,
        name: 'FlowMapp team',
        type: 'Product',
        settings: { background: null },
        users: [BABANOV_ROMAN, EKATERINA_SHABALINA, ROSTISLAV_BARTENEV],
      },
      {
        id: 6,
        name: 'Invest Allocator team',
        type: 'Product',
        settings: { background: null },
        users: [IVAN_PANFILOV, PAVEL_RAKHAEV],
      },
      {
        id: 7,
        name: 'Feexle team',
        type: 'Product',
        settings: { background: null },
        users: [
          BATOV_ANDREY,
          IVAN_PANFILOV,
          VALIEV_MIKHAIL,
          MAXIMOV_ALEX,
          PAVEL_RAKHAEV,
        ],
      },
      {
        id: 8,
        name: 'ManyChat team',
        type: 'Product',
        settings: { background: null },
        users: [BABANOV_ROMAN, ALEX_LAFAKI, PAVEL_RAKHAEV],
      },
      {
        id: 9,
        name: 'Elfista team',
        type: 'Product',
        settings: { background: null },
        users: [BABANOV_ROMAN, IVAN_PANFILOV, AKULENKO_DARIA],
      },
    ],
  },
  {
    id: 2,
    name: 'Operations team',
    type: 'Virtual',
    settings: { background: '#DAF3FF' },
    groups: [],
    users: [BABANOV_ROMAN, AKULENKO_DARIA, IVAN_PANFILOV],
  },
];

//路由跳转
import { Redirect } from 'react-router-dom';

import CDDiscover from '../pages/discover';
import CDRecommend from '../pages/discover/list';
import CDRanklist from '../pages/discover/paihangbang';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },

  {
    path: '/discover',
    component: CDDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: CDRecommend,
      },
      {
        path: '/discover/ranking',
        component: CDRanklist,
      },
      {
        path: '/discover/songslist',
        // component: CDSonglist,
      },
      {
        path: '/discover/djradio',
        exact: true,
        // component: CDDjradio,
      },
      {
        path: '/discover/Singer',
        // component: CDSinger,
      },
      {
        path: '/discover/album',
        // component: CDAlbum,
      },
    ],
  },
  // {
  //   path: '/mine',
  // component: CDMine,
  // },
];
export default routes;

import Home from "../views/home/index";
import Me from "../views/me/index";
import Video from "../views/video/index";
import Cloud from "../views/cloud/index";
import Account from "../views/account/index";
import Ranking from "../views/ranking/index";
import RankingDetail from "../views/ranking/detail/index";

// export interface iRouterList {

// }

export default [
  {
    path: "/home",
    component: Home,
    tabBar: true // 展示 底部 菜单
    // header: true // 展示搜索头
  },
  {
    path: "/me",
    component: Me,
    tabBar: true // 展示 底部 菜单
  },
  {
    path: "/video",
    component: Video,
    tabBar: true // 展示 底部 菜单
  },
  {
    path: "/cloud",
    component: Account,
    tabBar: true // 展示 底部 菜单
  },
  {
    path: "/account",
    component: Cloud,
    tabBar: true // 展示 底部 菜单
  },
  {
    path: "/ranking/detail/:id",
    component: RankingDetail,
    tabBar: true // 展示 底部 菜单
  },
  {
    path: "/ranking",
    component: Ranking,
    tabBar: true // 展示 底部 菜单
  },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
  {
    path: "/",
    redirect: "/home"
  }
];

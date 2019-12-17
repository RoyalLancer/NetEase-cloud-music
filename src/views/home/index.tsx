// src/components/Hello.tsx

import * as React from "react";
import "./index.scss";
import Header from "../../components/Header/";
import Slide from "./components/slide/";
import HomeCategory from "./components/category/";
import HomeRecommendPlayList from "./components/playList/";
import Srcoll from "../../components/Scroll";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrement, increment } from "../../store/actions";
import { StoreState } from "../../store/index";
import { bannerListContent } from "../../store/reducers/home";
import { getBannerList } from "../../store/actions/home";

export interface IProps {
  bannerList: bannerListContent[];
  getBannerList: () => void;
}

// 这里为什么不能滚动 因为  可能有如下原因
// 1. scroll 里边的盒子 没有高度
// 2.  需要重新  bs.refresh
// @connect()
class Home extends React.Component<IProps> {
  refSrcollDom: any;
  constructor(props: IProps) {
    super(props);
    this.refSrcollDom = React.createRef();
  }

  componentDidMount() {
    this.initData();
  }

  // 初始化数据  获取轮播  歌单列表 ...
  initData = () => {
    // return
    return new Promise<void>(async resolve => {
      await this.props.getBannerList();
      resolve();
    });
  };

  render() {
    return (
      <div className="home">
        {/* 头部搜索框 */}
        <Header />
        <div className="home-srcoll">
          <Srcoll ref={this.refSrcollDom} pullDownCb={this.initData}>
            {/* 轮播图 */}
            <Slide />
            {/* 分类 */}
            <HomeCategory />
            {/* 推荐歌单 */}
            <HomeRecommendPlayList />
            <HomeRecommendPlayList />
          </Srcoll>
        </div>
      </div>
    );
  }
}

export default connect(
  (s: StoreState) => {
    return {
      bannerList: s.home.bannerList
    };
  },
  (dispatch: Dispatch) => ({
    getBannerList: () => dispatch(getBannerList())
  })
)(Home);

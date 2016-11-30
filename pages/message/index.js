let util = require('./../../utils/util.js');
let Immutable = require('./../../libs/immutable');

Page({
  data: {
    products: [
      {url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'},
      {url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'},
      {url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'},
      {url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'}
    ],
    names: [],

    firstSrc: 'http://bpic.588ku.com/back_pic/00/03/85/1656205138bbe2d.png',//图片链接
    secondSrc: 'http://bpic.588ku.com/back_pic/04/07/63/28581203949ca9d.jpg!/fw/400/quality/90/unsharp/true/compress/true',//图片链接
    thirdSrc: 'http://img1.gtimg.com/ent/pics/hv1/13/71/2061/134034643.jpg',
  },

  onLoad(options) {
    this.setData({
      title: options.title
    });
    console.debug('1.onLoad', util.formatTime(new Date()));
  },
  onShow(){
    console.debug('2.onShow', util.formatTime(new Date()));
  },
  onReady(){
    console.debug('3.onReady', util.formatTime(new Date()));
    let that = this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      success(resp){
        let result = Immutable.fromJS(resp);
        let stories = result.get('data').get('stories').filter(item => {
          return item.get('title')
          // return item.toJS().title
        });
        console.debug(stories.toJS());
        // resp.data.stories.map((item, index) => {
        //   console.debug(item.title);
        // })
      }
    });
  },
  imageLoad1(e){
    console.debug('print-image1',e);
    let imageSize = util.imageScale(e);
    this.setData({
      firstWH: `width:${imageSize.imageWidth}px;height:${imageSize.imageHeight}px;`
    })
  },
  imageLoad2(e){
    console.debug('print-image2',e);
    let imageSize = util.imageScale(e);
    this.setData({
      secondWH: `width:${imageSize.imageWidth}px;height:${imageSize.imageHeight}px;`
    })
  },
  imageLoad3(e){
    console.debug('print-image3',e);
    let imageSize = util.imageScale(e);
    this.setData({
      thirdWH: `width:${imageSize.imageWidth}px;height:${imageSize.imageHeight}px;`
    })
  },
  onHide(){
    console.debug('4.onHide', util.formatTime(new Date()));
  },
  onUnload(){
    console.debug('5.onUnload', util.formatTime(new Date()));
  },
  onPullDownRefresh(){
    console.debug('onPullDownRefresh', util.formatTime(new Date()));
  },
  onReachBottom(){
    console.debug('onReachBottom', util.formatTime(new Date()));
  },
  viewTap(){
    console.debug('viewTap', util.formatTime(new Date()));
  },
})
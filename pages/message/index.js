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
    names: []
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
        let result  = Immutable.fromJS(resp);
        let stories =  result.get('data').get('stories').filter(item=>{
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
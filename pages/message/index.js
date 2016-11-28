var util = require('./../../utils/util.js');

Page({
  data: {
    products:[
      {url:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'} ,
      {url:'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'} ,
      {url:'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'} ,
      {url:'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'}
    ]
  },

  onLoad(options) {
    this.setData({
      title: options.title
    });
    console.debug('1.onLoad',util.formatTime(new Date()));
  },
  onShow(){
    console.debug('2.onShow',util.formatTime(new Date()));
  },
  onReady(){
    console.debug('3.onReady',util.formatTime(new Date()));
  },
  onHide(){
    console.debug('4.onHide',util.formatTime(new Date()));
  },
  onUnload(){
    console.debug('5.onUnload',util.formatTime(new Date()));
  },
  onPullDownRefresh(){
    console.debug('onPullDownRefresh',util.formatTime(new Date()));
  },
  onReachBottom(){
    console.debug('onReachBottom',util.formatTime(new Date()));
  },
  viewTap(){
    console.debug('viewTap',util.formatTime(new Date()));
  },
})
var util = require('./../../utils/util.js');

Page({
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
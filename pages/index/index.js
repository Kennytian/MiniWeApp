let param = {
  data : {
    myText : '你好，代码！',
    eventDemo1 : '演示点击事件'
  },
  tapName(e){
    console.debug('print-tabName:', e);
    console.debug('print-target:', e.target.dataset.hi);
    console.debug('print-currentTarget:', e.currentTarget.dataset.hi);
  },
  handleTap2(e){
    console.debug('print-tabName:', e);
    console.debug('print-target:', e.target.dataset.hi);
    console.debug('print-currentTarget:', e.currentTarget.dataset.hi);
  },
  handleTap3(e){
    console.debug('print-tabName:', e);
    console.debug('print-target:', e.target.dataset.hi);
    console.debug('print-currentTarget:', e.currentTarget.dataset.hi);
  }
};

Page(param);
# 简易微信小程序

## 第二天
### 导航
1. WXML导航，打开新页面

```html
<navigator url="../product/index?title=我是title参数" >
```

2. WXML导航，直接打开页面（**redirect**）
```html
<navigator url="../product/index?title=我是title参数" redirect>
```

3. js 代码导航，打开新页面
```javascript
wx.navigateTo({
  url: 'index?title=我是title参数'
})
```

4. js 代码导航，直接打开页面（**redirect**）
```javascript
wx.redirectTo({
  url: 'index?title=我是title参数'
})
```

5. js 代码后退导航
```javascript
wx.navigateBack({
  delta: 1
})
```

### 导航参数
1. 接收参数

在页面的 onLoad 事件里接收上

 onLoad(options) {
    this.setData({
      title: options.title
    })
  }

2. 赋值（跟 React 类似，React是 this.setState(...)）
```javascript
this.setData({
  title: options.title
})
```

### 页面生命周期
* onLoad: 页面加载
  * 一个页面只会调用一次。
  * 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。

* onShow: 页面显示
  * 每次打开页面都会调用一次。
  
* onReady: 页面初次渲染完成
  * 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  * 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期

* onHide: 页面隐藏
  * 当navigateTo或底部tab切换时调用(页面切换)。

* onUnload: 页面卸载
  * 当redirectTo或navigateBack的时候调用。

## 第一天
### 全局入口文件
* 程序入口文件是 app.js，**内容可以为空**
* 程序全局信息在 app.json 里配置，包括：路由，界面颜色
* 程序全局样式在 app.wxss 里配置，**内容可以为空**

### pages 目录
#### pages/index/index.js
```javascript
let param = {               // param 这个名字随便取
  data : {                  // data 是固定的，不能修改
    myText : '你好，代码！'   // myText 这个名字随便取，对应上 wxml 里的名字就行
  }
};

Page(param);                // Page 是固定的，不能修改
```

#### pages/index/index.wxml
```html
<view class="container">
  <text class="text-label">{{myText}}</text>
</view>
```
`view` 相当于 `div`，` text` 相当于 `span`。

`{{myText}}` 用两个大括号来显示 `js` 文件里的 `myText` 值

#### pages/index/index.wxss

就是作用于当前 `index` 页面的样式文件
# MiniWeApp



## 第一学
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
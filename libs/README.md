##微信小程序开发实战——使用UUID、Base64、Chance等

https://segmentfault.com/a/1190000007086274


### UUID
node-uuid模块，可以快速地生成符合 RFC4122 规范 version 1 或者 version 4 的 UUID。
```javascript
var uuid = require('./../../libs/uuid.modified);

// v1 是基于时间戳生成uuid
console.log(uuid.v1());
// v4 是随机生成uuid
console.log(uuid.v4());
```

### Base64
js-base64 是 Base64 的 JavaScript 实现。
```javascript
var Base64 = require('../../libs/base64.modified);

console.log(Base64.encode('Wechat'));
console.log(Base64.encode('微信'));
console.log(Base64.decode('V2VjaGF0'));
console.log(Base64.decode('5b6u5L+h'));
```

### Chance
Chance 是一个基于 JavaScript 的随机数工具类。可以生成随机数字，名称，地址，域名，邮箱，时间等等，几乎网站中使用的任何形式的内容都能够生成。这个随机数工具可以帮助减少单调的测试数据编写工作，特别是编写自动化测试的时候。

```javascript
var Chance = require('../../libs/chance.modified);

var chance = new Chance();
console.log(chance.string());
console.log(chance.integer());
console.log(chance.bool());
console.log(chance.phone());
console.log(chance.zip());
console.log(chance.guid());
```



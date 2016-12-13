let Immutable = require('./../../libs/immutable');
let uuid = require('./../../libs/uuid.modified');
let Base64 = require('./../../libs/base64.modified');
let chance = require('./../../libs/chance').Chance();

Page({
    onLoad(options){
      let lines = [];
      console.debug('print-', Immutable);

      let map1 = Immutable.Map({a: 1, b: 2, c: 3});
      let map2 = Immutable.Map({b: 2, a: 1, c: 3});
      lines.push("Immutable map1 is map2: " + Immutable.is(map1, map2));
      lines.push(map1);
      lines.push(map2);
      let map3 = map1.set('b', 20);
      lines.push(map3);
      lines.push("map3.get('b');");
      lines.push(map3.get('b'));
      lines.push("map2.get('b');");
      lines.push(map2.get('b'));

      let seq = Immutable.Range(0,10);
      let zipped = seq.zip(seq.filter(n=>n%2===0));
      lines.push(zipped);

      lines.push("\nUUID.v1()");
      lines.push(uuid.v1());
      lines.push("UUID.v4()");
      lines.push(uuid.v4());

      lines.push("\nBase64.encode('小程序'):" + Base64.encode('小程序'));
      lines.push("Base64.decode('5bCP56iL5bqP'):" + Base64.decode('5bCP56iL5bqP'));

      lines.push("\n随机string: " + chance.string());
      lines.push("随机integer: " + chance.integer());
      lines.push("随机20以下: " + chance.d20());
      lines.push("随机phone: " + chance.phone());
      lines.push("随机国家: " + chance.counties()[chance.integer({min: 0, max: 90})].name);
      lines.push("随机zip: " + chance.zip());
      lines.push("随机guid: " + chance.guid());
      lines.push("随机纬度: " + chance.latitude({min: 12.34, max: 56.78}));
      lines.push("随机经度: " + chance.longitude());

      let color = chance.color({format: 'hex'});
      lines.push("随机颜色: " + color);

      this.setData({
        title: options.title,
        text: lines.join('\n'),
        color: color
      })
    }
  }
);
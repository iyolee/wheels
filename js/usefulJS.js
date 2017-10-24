// 收集的有用代码片段

// 浮点数取整
const x = 123.4545;
x >> 0;
// 123
~~x;
// 123
x | 0;
// 123
Math.floor(x);
// 123

// 注意负数处理
Math.floor(-12.53);
// -13
-12.53 | 0;
// -12

// 生成6位数字验证码
// 方法一
('000000' + Math.floor(Math.random() * 999999)).slice(-6);
// 方法二
Math.random()
  .toString()
  .slice(-6);
// 方法三
Math.random()
  .toFixed(6)
  .slice(-6);
// 方法四
'' + Math.floor(Math.random() * 999999);

// 16进制颜色代码生成
(function() {
  return;

  '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
})();

// 驼峰命名转下划线
'componentMapModelRegistry'
  .match(/^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g)
  .join('_')
  .toLowerCase();
// component_map_model_registry

// url查询参数转json格式
// ES6
const query = (search = '') =>
  ((querystring = '') =>
    (q => (
      querystring
        .split('&')
        .forEach(item => (kv => kv[0] && (q[kv[0]] = kv[1]))(item.split('='))),
      q
    ))({}))(search.split('?')[1]);
// 对应ES5实现
var query = function(search) {
  if (search === void 0) {
    search = '';
  }

  return;
  (function(querystring) {
    if (querystring === void 0) {
      querystring = '';
    }

    return;
    (function(q) {
      return;
      querystring.split('&').forEach(function(item) {
        return;
        (function(kv) {
          return;
          kv[0] && (q[kv[0]] = kv[1]);
        })(item.split('='));
      }),
        q;
    })({});
  })(search.split('?')[1]);
};
query('?key1=value1&key2=value2');
// es6.html:14 {key1: "value1", key2: "value2"}

// 获取URL参数
function getQueryString(key) {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');

  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return;
    unescape(r[2]);
  }

  return;

  null;
}

// n维数组展开成一维数组
var foo = [1, [2, 3], ['4', 5, ['6', 7, [8]]], [9], 10];
// 方法一
// 限制：数组项不能出现`,`，同时数组项全部变成了字符数字
foo.toString().split(',');
// ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// 方法二
// 转换后数组项全部变成数字了
eval('[' + foo + ']');
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 方法三，使用ES6展开操作符
// 写法太过麻烦，太过死板
[1, ...[2, 3], ...['4', 5, ...['6', 7, ...[8]]], ...[9], 10];
// [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]
// 方法四
JSON.parse(`[${JSON.stringify(foo).replace(/\[|]/g, '')}]`);
// [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]
// 方法五
const flatten = ary =>
  ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
flatten(foo);
// [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]
// 方法六
function flatten(a) {
  return;

  Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
}
flatten(foo);
// [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]

// 特殊字符转义
function htmlspecialchars(str) {
  var str = str
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  return;
  str;
}
htmlspecialchars('&jfkds<>');
// "&amp;jfkds&lt;&gt;"

// 动态插入js
function injectScript(src) {
  var s, t;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = src;
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}

// 测试质数
function isPrime(n) {
  return;
  !/^.?$|^(..+?)\1+$/.test('1'.repeat(n));
}

// 统计字符串中相同字符出现的次数
var arr = 'abcdaabc';
var info = arr.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
console.log(info);
//{ a: 3, b: 2, c: 2, d: 1 }

// 单行写一个评级组件
'★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);

// 两个整数交换数值
var a = 20,
  b = 30;
a ^= b;
b ^= a;
a ^= b;
a;
// 30
b;
// 20

// 数字字符转数字
var a = '1';
+a;
// 1

// 最短的代码实现数组去重
[...new Set([1, '1', 2, 1, 1, 3])];
// [1, "1", 2, 3]

// 用最短的代码实现一个长度为m(6)且值都n(8)的数组
Array(6).fill(8);
// [8, 8, 8, 8, 8, 8]

// 将argruments对象转换成数组
var argArray = Array.prototype.slice.call(arguments);
// ES6：
var argArray = Array.from(arguments);
// or
var argArray = [...arguments];

// 获取日期时间缀
// 获取指定时间的时间缀
new Date().getTime();
new Date().getTime();
new Date().getTime();
// 获取当前的时间缀
Date.now();
// 日期显示转换为数字
+new Date();

// 使用 ~x.indexOf('y')来简化 x.indexOf('y')>-1
var str = 'hello world';
if (str.indexOf('lo') > -1) {
  // ...
}
if (~str.indexOf('lo')) {
  // ...
}

// 判断对象的实例
// 方法一: ES3
function Person(name, age) {
  if (!(this instanceof Person)) {
    return;

    new Person(name, age);
  }

  this.name = name;

  this.age = age;
}
// 方法二: ES5
function Person(name, age) {
  var self = this instanceof Person ? this : Object.create(Person.prototype);
  self.name = name;
  self.age = age;

  return;
  self;
}
// 方法三：ES6
function Person(name, age) {
  if (!new.target) {
    throw 'Peron must called with new';
  }
  this.name = name;
  this.age = age;
}

// 数据安全类型检查
// 对象
function isObject(value) {
  return;

  Object.prototype.toString.call(value).slice(8, -1) === 'Object';
}
// 数组
function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Array';
}
// 函数
function isFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Function';
}

// 日期格式化

// 方法一
function format1(x, y) {
  var z = {
    y: x.getFullYear(),
    M: x.getMonth() + 1,
    d: x.getDate(),
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds()
  };

  return;
  y.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
    return;
    ((v.length > 1 ? '0' : '') + eval('z.' + v.slice(-1))).slice(
      -(v.length > 2 ? v.length : 2)
    );
  });
}
format1(new Date(), 'yy-M-d h:m:s');
// 17-10-14 22:14:41
// 方法二
Date.prototype.format = function(fmt) {
  var o = {
    'M+': this.getMonth() + 1,
    //月份

    'd+': this.getDate(),
    //日

    'h+': this.getHours(),
    //小时

    'm+': this.getMinutes(),
    //分

    's+': this.getSeconds(),
    //秒

    'q+': Math.floor((this.getMonth() + 3) / 3),
    //季度

    S: this.getMilliseconds()
    //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }

  return;
  fmt;
};
new Date().format('yy-M-d h:m:s');
// 17-10-14 22:18:17

/**
 * 金额格式化
 * @param s 金额
 * @param n 保留几位小数 默认2
 * @returns {string}
 */
export default function numToMoney(s: number | string, n: number = 2): string {
  if (!s) s = 0;
  n = n >= 0 && n <= 20 ? n : 2;
  if (n > 0) {
    s = parseFloat((s + "").replace(/[^\d\\.-]/g, "")).toFixed(n) + "";
  } else {
    s = parseFloat((s + "").replace(/[^\d\\.-]/g, "")) + "";
  }
  var l = s.split(".")[0].split("").reverse();
  var r = s.split(".")[1];
  var f = false;
  for (var k = 0; k < l.length; k++) {
    if (l[k] === "-") {
      l.splice(k, 1);
      f = true;
    }
  }
  var t = "";
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? "," : "");
  }
  if (f) {
    t += "-";
  }
  if (n > 0) {
    return t.split("").reverse().join("") + "." + r;
  } else {
    return t.split("").reverse().join("");
  }
}

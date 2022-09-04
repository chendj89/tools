import { numToMoney } from "../tools";

export default function vNumber(el, binding, vNode) {
  let format = numToMoney;
  let ele = el.querySelector(".el-input__inner");
  ele.oninput = function () {
    // 过滤非数字和.
    ele.value = ele.value.replace(/[^\d.]/g, "");
  };
  ele.onblur = function () {
    let value = format(ele.value, 2) || "";
    if (vNode.componentInstance) {
      ele.value = value;
      vNode.componentInstance.$emit("input", value);
    } else {
      ele.value = value;
      ele.dispatchEvent(new Event("input"));
    }
  };
  ele.onfocus = function () {
    // 获取焦点时过滤非数字和.
    ele.value = ele.value.replace(/[^\d.]/g, "");
  };

  if (binding.value && binding.value.init) {
    ele.onblur();
  }
}

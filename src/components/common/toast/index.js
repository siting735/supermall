import Toast from "./Toast";
import Vue from 'vue'

const obj = {}

obj.install = function () {
//  1、创建组件构造器
  const toastConstructor = Vue.extend(Toast)
//  2、创建toast的对象
  const toast = new toastConstructor()
//  3、将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('duv'))
//  4、元素再添加到body上
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj

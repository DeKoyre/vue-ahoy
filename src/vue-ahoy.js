import ahoy from 'ahoy.js';

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$ahoy', { value: ahoy });
  }
}

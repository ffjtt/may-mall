import Toast from './Toast.vue'


const toast = {
  install(Vue) {
    //1store.commit('MUTATIONS', payload)
    const toastConstructor = Vue.extend(Toast)

    const toast = new toastConstructor()

    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
  }
}

export default toast
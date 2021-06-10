import {debounce} from './utils'

const mixin = {
  data() {
    return {
      newRefresh:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.newRefresh = () => {
      console.log('home调用refresh')
      refresh()
    }
    this.$bus.$on("imgLoad", this.newRefresh)
  }
}
export {mixin}
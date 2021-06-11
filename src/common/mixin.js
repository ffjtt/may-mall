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
      this.$nextTick(() => {
        if(this.$route.path.indexOf('detail') == 1) {
          this.offsetTopList = []
          this.offsetTopList.push(0)
          this.offsetTopList.push(this.$refs.paramInfo.$el.offsetTop)
          this.offsetTopList.push(this.$refs.commentInfo.$el.offsetTop)
          this.offsetTopList.push(this.$refs.goodsList.$el.offsetTop)
          this.offsetTopList.push(Number.MAX_VALUE)
        }
      }) 
      refresh()
    }
    this.$bus.$on("imgLoad", this.newRefresh)
  }
}
export {mixin}
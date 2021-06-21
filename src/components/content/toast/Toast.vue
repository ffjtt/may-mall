<template>
  <div class="toast">
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: true,
    };
  },
  methods: {
    show(message, settime) {
      (this.isShow = true),
        (this.message = message),
        setTimeout(() => {
          (this.isShow = false), (this.message = "");
        }, settime);
    },
  },
};
</script>

<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  color: #fff;
  background-color: #555;
}
</style>
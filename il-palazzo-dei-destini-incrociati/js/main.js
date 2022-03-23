const app = new Vue({
  el: '#app',
  data: {
    popUp: [false, false],
  },

  methods: {
    togglePopUp(index) {
      this.popUp[index] = !this.popUp[index];
    },
  },
});

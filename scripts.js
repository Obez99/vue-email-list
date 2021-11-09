Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    urlAPI: "https://flynn.boolean.careers/exercises/api/random/mail"
  },
  methods: {

  },
  mounted() {
    axios.get(this.urlAPI).then((obj) => {
      console.log(obj)
    })
  }
})
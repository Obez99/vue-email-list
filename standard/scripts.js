Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    urlAPI: "https://flynn.boolean.careers/exercises/api/random/mail",
    emails: []
  },
  methods: {

  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.urlAPI).then((obj) => {
        this.emails.push(obj.data.response)
      })
    }
  }
})
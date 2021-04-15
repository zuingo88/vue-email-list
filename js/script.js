//GOAL: Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

function initVue() {
  new Vue({
    el: "#app",
    data: {
      mail: null,
      mails: [],
    },
    methods: {
      getMail: function () {
        for (let i = 0; i < 10; i++) {
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
              this.mail = response.data.response;
              this.mails.push(this.mail);
            });
        }
        console.log(this.mails);
      },
      getMails: function () {
        this.getMail();
      },
      deleteMail: function (i) {
        this.mails.splice(i, 1);
      },
    },
  });
}

initVue();

document.addEventListener("DOMContentLoaded", initVue);

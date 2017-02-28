<template src="./template.html"></template>

<script>
  export default {
    name: 'message',

    data() {
      return {
        messages: null,
        newMessage: '',
        apiURL: 'http://microblog-api.herokuapp.com/api/messages',
      };
    },

    created() {
      this.getAllMessages();
    },

    methods: {
      getAllMessages() {
        this.$http.get(this.apiURL).then((response) => {
          this.messages = response.body.reverse();
        });
      },
      postNewMessages() {
        const newValue = this.newMessage && this.newMessage.trim();
//
        if (newValue) {
          const params = {
            author: 'default-vuejs2',
            content: newValue,
          };

          this.$http.post(this.apiURL, params).then(() => {
            this.getAllMessages();
            this.newMessage = '';
          });
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style.css"></style>

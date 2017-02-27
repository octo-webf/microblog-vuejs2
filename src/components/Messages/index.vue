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
        const xhr = new XMLHttpRequest();

        xhr.open('GET', this.apiURL);

        xhr.onload = () => {
          this.messages = JSON.parse(xhr.responseText).reverse();
        };

        xhr.send();
      },
      postNewMessages() {
        const newValue = this.newMessage && this.newMessage.trim();
//
        if (newValue) {
          const xhr = new XMLHttpRequest();
          const params = JSON.stringify({
            author: 'default-vuejs2',
            content: newValue,
          });

          xhr.open('POST', this.apiURL);
          xhr.setRequestHeader('Content-type', 'application/json');

          xhr.onreadystatechange = () => {
            this.getAllMessages();
            this.newMessage = '';
          };

          xhr.send(params);
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style.css"></style>

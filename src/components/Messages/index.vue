<template src="./template.html"></template>

<script>
  export default {
    name: 'message',

    data() {
      return {
        messages: null,
      };
    },

    created() {
      this.fetchMessages();
    },

    methods: {
      fetchMessages() {
        const apiURL = 'http://microblog-api.herokuapp.com/api/messages';
        const xhr = new XMLHttpRequest();
        const self = this;

        xhr.open('GET', apiURL);

        xhr.onload = () => {
          self.messages = JSON.parse(xhr.responseText);
        };

        xhr.send();
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./style.css"></style>

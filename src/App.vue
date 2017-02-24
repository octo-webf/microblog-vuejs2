<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  body {
    margin: 0;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #f5f8fa;
  }

  *:focus {
    outline: none;
  }

  .app {
    display: flex;
    justify-content: center;
    padding: 150px 0;
  }

  input {
    font-size: 14px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 3px;
    color: #666;
    padding: 4px 14px;
    border: 1px solid #99CDE1;
  }
</style>

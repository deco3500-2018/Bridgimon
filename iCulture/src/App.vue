<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #d74e09;
}

.frame {
  width: 375px;
  height: 667px;
  border-top: 65px solid #000000;
  border-bottom: 5px solid #000000;
  border-left: 5px solid #000000;
  border-right: 5px solid #000000;
  color: #040f16;
  background-color: #fff;
}

.frame > div {
  width: 100%;
}
</style>

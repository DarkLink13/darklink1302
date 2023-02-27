<template>
  <div class="background">
    <Main />
  </div>
</template>
<script setup>
useServerSeoMeta({
  title: 'DarkLink',
  ogTitle: 'DarkLink',
  ogDescription: 'Portfolio for DarkLink Dev',
  ogImage: 'https://darkiink.com/icon512.png'
})
</script>
<style>
.background {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0c0c0d;
  }

  body {
    margin: 0;
  }

</style>

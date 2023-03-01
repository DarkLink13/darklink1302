<template>
  <div class="background dark:bg-black">
    <VitePwaManifest />
    <Main />
  </div>
</template>
<style>
.background {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  body {
    margin: 0;
  }

</style>

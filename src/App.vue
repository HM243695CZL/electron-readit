<template>
  <div class="app-container">
    <Home />
  </div>
</template>
<script lang="ts" setup>
  import Home from './views/home.vue';
  import {provide, ref} from 'vue';

  const isShow = ref(false);
  const changeIsShow = (value: boolean) => {
    isShow.value = value;
  }

  provide('dialog-visible', {
    isShow,
    changeIsShow
  });
</script>

<template>
  <router-view />
</template>

<script setup>
  import * as echarts from 'echarts'
  import { provide } from 'vue'

  provide('echarts', echarts)
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
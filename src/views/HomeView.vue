<template>
  <div class="home">
    {{homepage}}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue-demi";

const homepage = ref('welcome home')
</script>

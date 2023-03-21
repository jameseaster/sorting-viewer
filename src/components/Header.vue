<template>
  <div class="header-container">
    <h1>{{ TITLE }}</h1>
  </div>
</template>

<script setup lang="ts">
import { TITLE } from "@/utils/constants";
</script>

<style scoped>
.header-container {
  width: 100%;
  display: flex;
  margin-top: 3%;
  align-content: center;
  justify-content: center;
}
</style>

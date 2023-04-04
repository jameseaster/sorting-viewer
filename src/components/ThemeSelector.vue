<template>
  <Button
    text
    rounded
    :icon="icon"
    class="theme-icon"
    @click="toggleTheme"
    style="margin-left: auto"
  />
</template>

<script setup lang='ts'>
// Imports
import { THEMES } from "@/utils/constants";
import { ref, onMounted } from "vue";
import { manuallyUpdateTheme } from "@/utils/helpers";

// State
const icon = ref("");
const theme = ref("");
const dark = ref(THEMES.DARK);
const light = ref(THEMES.LIGHT);

// Start in light mode
onMounted(() => toLight());

// Update local theme name and icon to light
const toLight = () => {
  theme.value = light.value.name;
  icon.value = light.value.icon;
};

// Update local theme name and icon to dark
const toDark = () => {
  theme.value = dark.value.name;
  icon.value = dark.value.icon;
};

const toggleTheme = () => {
  const isLight = theme.value === light.value.name;
  const updateThemeVariables = isLight ? toDark : toLight;
  manuallyUpdateTheme(isLight);
  updateThemeVariables();
};
</script>

<style>
.theme-icon {
  margin: 8px;
}
</style>
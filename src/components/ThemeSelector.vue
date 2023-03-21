<template>
  <Button
    text
    rounded
    :icon="icon"
    class="theme-icon"
    @click="toggleTheme"
    style="margin-left: auto"
  />
  <link :id="link" rel="stylesheet" :href="hrefConstant" />
</template>

<script setup lang='ts'>
import { THEMES } from "@/utils/constants";
import { usePrimeVue } from "primevue/config";
import { ref, computed, onMounted } from "vue";

// Hooks (
const PrimeVue: any = usePrimeVue(); /* not typed with changeTheme */

// State
const icon = ref("");
const theme = ref("");
const link = ref("theme-link");
const dark = ref(THEMES.DARK);
const light = ref(THEMES.LIGHT);

// Start in light mode
onMounted(() => toLight());

// Start in light mode
const hrefConstant = computed(() => {
  return `/${light.value.file}/theme.css`;
});

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
  const isLightTheme = theme.value === light.value.name;
  const prevTheme = isLightTheme ? light.value.file : dark.value.file;
  const newTheme = isLightTheme ? dark.value.file : light.value.file;
  const callback = isLightTheme ? toDark : toLight;
  PrimeVue.changeTheme(prevTheme, newTheme, link.value, callback);
};
</script>

<style scoped>
.theme-icon {
  margin: 8px;
}
</style>
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

<script>
import { THEMES } from "@/utils/constants";

export default {
  name: "ThemeSelector",
  data() {
    return {
      icon: "",
      theme: "",
      link: "theme-link",
      dark: THEMES.DARK,
      light: THEMES.LIGHT,
    };
  },
  mounted() {
    // Starts in light mode
    this.toLight();
  },
  computed: {
    hrefConstant() {
      // Starts in light mode
      return `/${this.light.file}/theme.css`;
    },
  },
  methods: {
    toggleTheme() {
      const { light, dark, link, toLight, toDark } = this;
      this.theme === light.name
        ? this.$primevue.changeTheme(light.file, dark.file, link, toDark)
        : this.$primevue.changeTheme(dark.file, light.file, link, toLight);
    },
    toDark() {
      this.theme = this.dark.name;
      this.icon = this.dark.icon;
    },
    toLight() {
      this.theme = this.light.name;
      this.icon = this.light.icon;
    },
  },
};
</script>

<style scoped>
.theme-icon {
  margin: 8px;
}
</style>
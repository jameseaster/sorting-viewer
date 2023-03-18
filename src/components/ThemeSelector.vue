<template>
  <Button
    text
    rounded
    :icon="icon"
    @click="toggleTheme"
    style="margin-left: auto"
  />
  <link
    :id="link"
    rel="stylesheet"
    href="public/bootstrap4-light-blue/theme.css"
  />
</template>

<script>
export default {
  name: "ThemeSelector",
  data() {
    return {
      icon: "",
      theme: "",
      link: "theme-link",
      light: {
        name: "light",
        file: "bootstrap4-light-blue",
        icon: "pi pi-moon",
      },
      dark: {
        name: "dark",
        file: "bootstrap4-dark-blue",
        icon: "pi pi-sun",
      },
    };
  },
  mounted() {
    this.toLight();
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

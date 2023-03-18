<template>
  <Button
    text
    rounded
    :icon="icon"
    @click="toggleTheme"
    style="margin-left: auto"
  />
  <link
    id="theme-link"
    rel="stylesheet"
    :href="`public/bootstrap4-${theme}-blue/theme.css`"
  />
</template>

<script>
export default {
  name: "ThemeSelector",
  data() {
    return {
      theme: "light",
      icon: "pi pi-moon",
    };
  },
  methods: {
    toggleTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
        this.icon = "pi pi-sun";
      } else {
        this.theme = "light";
        this.icon = "pi pi-moon";
      }
    },
  },
};
</script>

<template>
  <div style="max-width: 200px">
    <Slider
      :min="min"
      :max="max"
      :step="step"
      class="w-14rem"
      v-model="quantity"
    />
    <!-- <v-slider
        v-model="quantity"
        :min="min"
        :max="max"
        dark
        :step="step"
        hide-details
      >
        <template v-slot:prepend>
          <v-icon @click="decrement"> mdi-minus </v-icon>
        </template>
        <template v-slot:append>
          <v-icon @click="increment"> mdi-plus </v-icon>
        </template>
      </v-slider> -->
  </div>
</template>

<script>
export default {
  name: "BarSlider",
  data() {
    return {
      step: 1,
      min: 2,
      max: 82,
      quantity: 42,
    };
  },
  watch: {
    quantity: function (newVal) {
      this.$emit("changeSize", newVal);
    },
  },
  methods: {
    decrement: function () {
      if (this.quantity > 2) {
        this.quantity -= 1;
        this.$emit("changeSize", this.quantity);
      } else {
        this.toast("Minimum");
      }
    },
    increment: function () {
      if (this.quantity < 82) {
        this.quantity += 1;
        this.$emit("changeSize", this.quantity);
      } else {
        this.toast("Maximum");
      }
    },
    toast: function (limit) {
      this.$bvToast.toast(`${limit} number of columns reached`, {
        autoHideDelay: 3000,
        variant: "light",
        toaster: "b-toaster-top-center",
        solid: true,
        className: ["toast"],
      });
    },
  },
};
</script>

<style scoped></style>

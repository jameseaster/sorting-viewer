// Vue
import { createApp } from "vue";
import "./assets/main.css";

// PrimeVue
import PrimeVue from "primevue/config";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";

// App Component
import App from "./App.vue";

// PrimeVue Components
import Toast from "primevue/toast";
import Slider from "primevue/slider";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";

// Create App
const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component("Toast", Toast);
app.component("Button", Button);
app.component("Slider", Slider);
app.component("Dropdown", Dropdown);

app.mount("#app");

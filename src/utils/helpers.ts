/**
 * Manually updates stylesheet variables and classes
 *
 * PrimeVue's current method for toggling between light and ark modes
 * involves copying the stylesheet css file into the public directory.
 * This makes the project appear to be 90% css because those files
 * are thousands of lines long.
 *
 * See: https://primevue.org/theming/#switchthemes
 *
 * Until PrimeVue updates their API for this functionality, I am manually
 * changing specific values to be able to toggle between 'light' & 'dark' mode
 */

export const manuallyUpdateTheme = (isLight: boolean) => {
  const bodyEl = document.getElementById("app") as any;
  bodyEl.style.setProperty("--surface-a", isLight ? "#2a323d" : "#ffffff");
  bodyEl.style.setProperty("--primary-color", isLight ? "#8dd0ff" : "#007bff");
  bodyEl.style.setProperty("--text-color", isLight ? "#ffffffde" : "#212529");

  // Slider
  changeStyle("p-slider", "background", isLight ? "#3f4b5b" : "#e9ecef");
  changeStyle("p-slider-range", "background", "var(--primary-color)");
  changeStyle("p-slider-handle", "background", "var(--primary-color)");
  changeStyle("p-slider-handle", "border", "var(--primary-color)");

  // Button
  changeStyle("p-button", "color", "var(--primary-color)");
  changeStyle("p-button-outlined", "color", "var(--primary-color)");

  // Input
  changeStyle("p-inputtext", "color", "var(--text-color)");
  changeStyle("p-dropdown-trigger", "color", "var(--text-color)");
  changeStyle("p-dropdown", "background", isLight ? "#20262e" : "#ffffff");
  changeStyle(
    "p-dropdown",
    "border",
    isLight ? "1px solid #3f4b5b" : "1px solid #ced4da"
  );

  document.styleSheets[0].insertRule(
    `.p-dropdown-item.p-highlight {
      color: ${isLight ? "#151515" : "#ffffff"} !important;
      background: ${isLight ? "#8dd0ff" : "#007bff"} !important;
    }`,
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    `.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
      color: ${isLight ? "#ffffffde" : "#212529"} !important;
      background: ${isLight ? "#343b46" : "#e9ecef"} !important;
    }`,
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    `.p-dropdown-item {
      color: ${isLight ? "#ffffffde" : "#212529"} !important;
      background: ${isLight ? "#2a323d" : "#ffffff"} !important;
      padding: 0.5rem 1.5rem !important;
    }`,
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    `.p-dropdown-panel {
      color: ${isLight ? "#ffffffde" : "#212529"} !important;
      background: ${isLight ? "#343b46" : "#ffffff"} !important;
      border: ${isLight ? "1px solid #3f4b5b" : "1px solid #ced4da"} !important;
    }`,
    document.styleSheets[0].cssRules.length
  );
  document.styleSheets[0].insertRule(
    `.p-dropdown-items-wrapper {
      border-radius: 4px;
    }`,
    document.styleSheets[0].cssRules.length
  );
};

const changeStyle = (className: string, field: string, value: string) => {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i] as HTMLElement;
    el.style.setProperty(field, value);
  }
};

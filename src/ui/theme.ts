import { Theme } from "theme-ui";
import { tailwind } from "@theme-ui/presets";

export const theme: Theme = {
  ...tailwind,
  layout: {
    container: {
      default: {
        maxWidth: ["90%", "80%", "70%", "60%"],
      },
    },
  },
};

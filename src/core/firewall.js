import { scanInput } from "./scanner.js";
import { validateConfig } from "../utils/validator.js";
import { log } from "../utils/logger.js";

export class Firewall {
  constructor(config = {}) {
    validateConfig(config);
    this.config = config;
  }

  async scan({ input }) {
    const result = scanInput(input, this.config);

    if (this.config.logging) {
      log(result);
    }

    return result;
  }
}

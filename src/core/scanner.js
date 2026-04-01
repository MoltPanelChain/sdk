import { rules } from "./rules.js";

export function scanInput(input, config) {
  for (const rule of rules) {
    if (rule.pattern.test(input)) {
      return {
        status: "blocked",
        reason: rule.reason,
        confidence: 0.9
      };
    }
  }

  return {
    status: "safe",
    reason: "No threats detected",
    confidence: 0.99
  };
}

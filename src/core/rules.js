export const rules = [
  {
    pattern: /ignore previous instructions/i,
    reason: "Prompt injection attempt"
  },
  {
    pattern: /system override/i,
    reason: "System manipulation attempt"
  },
  {
    pattern: /expose api key/i,
    reason: "Sensitive data extraction attempt"
  }
];

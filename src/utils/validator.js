export function validateConfig(config) {
  if (!config.apiKey) {
    throw new Error("API key is required");
  }
}

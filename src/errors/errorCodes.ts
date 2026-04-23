export const ERROR_CODES = {
  // Auth
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  EMAIL_IN_USE: "EMAIL_IN_USE",
  TOO_MANY_REQUESTS: "TOO_MANY_REQUESTS",

  // Permissions
  PERMISSION_DENIED: "PERMISSION_DENIED",

  // Data
  NOT_FOUND: "NOT_FOUND",

  // Network
  NETWORK_ERROR: "NETWORK_ERROR",

  // Generic
  UNKNOWN: "UNKNOWN",
} as const;

export type ErrorCodeT = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

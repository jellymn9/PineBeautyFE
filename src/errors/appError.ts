import { ErrorCodeT, ERROR_CODES } from "./errorCodes";

export class AppError extends Error {
  constructor(
    public code: ErrorCodeT = ERROR_CODES.UNKNOWN,
    message?: string,
    public cause?: unknown,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class NetworkError extends AppError {}
export class NotFoundError extends AppError {}
export class AuthError extends AppError {}
export class PermissionError extends AppError {}
export class ValidationError extends AppError {}

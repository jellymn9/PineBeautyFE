import { AppError } from "./appError";
import { ERROR_CODES } from "./errorCodes";

export const mapErrorToMessage = (error: AppError): string => {
  switch (error.code) {
    case ERROR_CODES.INVALID_CREDENTIALS:
      return "Invalid email or password";

    case ERROR_CODES.EMAIL_IN_USE:
      return "Email is already registered";

    case ERROR_CODES.TOO_MANY_REQUESTS:
      return "Too many attempts, try again later";

    case ERROR_CODES.PERMISSION_DENIED:
      return "You do not have permission";

    case ERROR_CODES.NETWORK_ERROR:
      return "Network error, please try again";

    default:
      return "Something went wrong";
  }
};

export const mapErrorToMessageSafe = (error: unknown): string => {
  if (error instanceof AppError) {
    return mapErrorToMessage(error);
  }

  return "Something went wrong";
};

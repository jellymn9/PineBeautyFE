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

    case ERROR_CODES.NOT_FOUND:
      return "Requested resource not found";

    case ERROR_CODES.INVALID_DATA:
      return "Invalid data received";

    case ERROR_CODES.VALIDATION_ERROR:
      return "Please check your input and try again";

    case ERROR_CODES.UNKNOWN:
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

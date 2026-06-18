import { ValidationError as YupValidationError } from "yup";
import { ValidationError } from "./appError";
import { ERROR_CODES } from "./errorCodes";

export const handleValidationError = (error: YupValidationError): never => {
  throw new ValidationError(ERROR_CODES.INVALID_DATA, error.message, error);
};

import { ValidationError as YupValidationError } from "yup";
import { handleValidationError } from "@/errors/validationErrorHandler";
import {
  ShippingAddressFormInputs,
  shippingAddressSessionSchema,
} from "@/utils/schemas/profileSchema";
import { ERROR_CODES } from "@/errors/errorCodes";
import { AppError } from "@/errors/appError";
import {
  getFromSessionStorage,
  saveToSessionStorage,
} from "../webStorageHelper";

export async function saveShippingAddress(address: ShippingAddressFormInputs) {
  try {
    await shippingAddressSessionSchema.validate(address, { abortEarly: false });
    saveToSessionStorage("shippingAddress", JSON.stringify(address));
  } catch (error) {
    if (error instanceof YupValidationError) {
      handleValidationError(error);
    }
    throw new AppError(ERROR_CODES.UNKNOWN, undefined, error);
  }
}

export const getShippingAddressFromSession = () => {
  const sessionAddress = getFromSessionStorage("shippingAddress");
  if (!sessionAddress) {
    return null;
  }
  try {
    const parsedAddress: ShippingAddressFormInputs = JSON.parse(sessionAddress);
    shippingAddressSessionSchema.validateSync(parsedAddress, {
      abortEarly: false,
    });
    console.log("Parsed shipping address from session:", parsedAddress);

    return parsedAddress;
  } catch (error) {
    if (error instanceof YupValidationError) {
      handleValidationError(error);
    }
    throw new AppError(ERROR_CODES.UNKNOWN, undefined, error);
  }
};

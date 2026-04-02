import { AppError, NetworkError } from "@/errors/appError";
import { CartActionT } from "./cartErrorTypes";
import { mapErrorToMessage } from "@/errors/errorMapper";

export const mapCartError = (
  error: AppError,
  action: CartActionT,
): string | undefined => {
  // NETWORK-specific overrides
  if (error instanceof NetworkError) {
    switch (action) {
      case "load":
        return "Unable to load cart. Check your connection.";

      case "sync":
        return "Cart is not syncing. Please check your connection.";

      case "add":
      case "remove":
      case "increase":
      case "decrease":
      case "update":
        return "Connection issue. Cart update failed.";
    }
  }

  // ACTION-specific fallback messages
  switch (action) {
    case "load":
      return "Failed to load cart.";

    case "sync":
      return "Cart is not updating properly.";

    case "add":
      return "Failed to add item to cart.";

    case "remove":
      return "Failed to remove item from cart.";

    case "increase":
    case "decrease":
    case "update":
      return "Failed to update cart.";
  }

  // for fallback
  return undefined;
};

export const mapCartErrorWithFallback = (
  error: AppError,
  action: CartActionT,
): string => {
  return mapCartError(error, action) ?? mapErrorToMessage(error);
};

export const mapCartErrorSafe = (
  error: unknown,
  action: CartActionT,
): string => {
  if (error instanceof AppError) {
    return mapCartErrorWithFallback(error, action);
  }

  // fallback for unknown errors
  return mapCartErrorWithFallback(new AppError(), action);
};

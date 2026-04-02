import { FirebaseError } from "firebase/app";
import {
  AuthError,
  NetworkError,
  NotFoundError,
  PermissionError,
  AppError,
} from "./appError";
import { ERROR_CODES } from "./errorCodes";

export const handleFirebaseError = (error: unknown): never => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      // Auth
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        throw new AuthError(ERROR_CODES.INVALID_CREDENTIALS, undefined, error);

      case "auth/email-already-in-use":
        throw new AuthError(ERROR_CODES.EMAIL_IN_USE, undefined, error);

      case "auth/too-many-requests":
        throw new AuthError(ERROR_CODES.TOO_MANY_REQUESTS, undefined, error);

      // Firestore
      case "permission-denied":
        throw new PermissionError(
          ERROR_CODES.PERMISSION_DENIED,
          undefined,
          error,
        );

      case "not-found":
        throw new NotFoundError(ERROR_CODES.NOT_FOUND, undefined, error);

      case "unavailable":
        throw new NetworkError(ERROR_CODES.NETWORK_ERROR, undefined, error);

      default:
        throw new AppError(ERROR_CODES.UNKNOWN, undefined, error);
    }
  }

  throw new AppError(ERROR_CODES.UNKNOWN, undefined, error);
};

// export const handleFirebaseError = (error: unknown): never => {
//   if (error instanceof FirebaseError) {
//     switch (error.code) {
//       // Auth errors
//       case "auth/user-not-found":
//       case "auth/wrong-password":
//       case "auth/invalid-credential":
//         throw new AuthError("Invalid email or password");

//       case "auth/email-already-in-use":
//         throw new AuthError("Email is already registered");

//       case "auth/too-many-requests":
//         throw new AuthError("Too many attempts, please try again later");

//       // Firestore errors
//       case "permission-denied":
//         throw new PermissionError("You do not have permission to do this");

//       case "not-found":
//         throw new NotFoundError("Requested data was not found");

//       case "unavailable":
//         throw new NetworkError("Service unavailable, please try again");

//       default:
//         throw new AppError(`Something went wrong: ${error.code}`);
//     }
//   }

//   // Non-Firebase error
//   throw new AppError("An unexpected error occurred");
// };

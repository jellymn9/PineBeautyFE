import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { ValidationError as YupValidationError } from "yup";
import { ValidationError } from "@/errors/appError";
import { handleFirebaseError } from "@/errors/firebaseErrorHandler";
import {
  CreateProfileInput,
  UpdateProfileInput,
  UserProfile,
} from "@/utils/types/profileTypes";
import { userProfileSchema } from "@/utils/schemas/profileSchema";
import { ERROR_CODES } from "@/errors/errorCodes";
import { reportError } from "@/monitoring/reportError";

async function upsertProfile(uid: string, payload: Record<string, unknown>) {
  const profileRef = doc(db, "profiles", uid);

  await setDoc(profileRef, payload, { merge: true });
}

export async function getProfile(uid: string): Promise<UserProfile | null> {
  try {
    const profileRef = doc(db, "profiles", uid);
    const snapshot = await getDoc(profileRef);

    if (!snapshot.exists()) {
      return null;
    }

    return await userProfileSchema.validate(snapshot.data(), {
      stripUnknown: true,
    });
  } catch (e) {
    if (e instanceof YupValidationError) {
      throw new ValidationError(
        ERROR_CODES.INVALID_DATA,
        "Invalid profile data received from database",
        e,
      );
    }

    throw handleFirebaseError(e);
  }
}

export async function createProfile(data: CreateProfileInput) {
  const payload = {
    uid: data.uid,
    email: data.email,
    displayName: data.displayName ?? null,
    role: "customer" as const,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  try {
    await upsertProfile(data.uid, payload);
  } catch (error) {
    reportError(error, {
      feature: "profile",
      action: "create_profile",
      extra: {
        uid: data.uid,
        email: data.email,
      },
    });

    handleFirebaseError(error);
  }
}

export async function updateProfile(data: UpdateProfileInput) {
  const payload = {
    displayName: data.displayName ?? null,
    defaultShippingAddress: data.defaultShippingAddress,
    updatedAt: serverTimestamp(),
  };

  try {
    await upsertProfile(data.uid, payload);
  } catch (error) {
    reportError(error, {
      feature: "profile",
      action: "update_profile",
      extra: {
        uid: data.uid,
      },
    });

    handleFirebaseError(error);
  }
}

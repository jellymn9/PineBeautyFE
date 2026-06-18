import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { ValidationError as YupValidationError } from "yup";
import { handleFirebaseError } from "@/errors/firebaseErrorHandler";
import {
  CreateProfileInput,
  UpdateProfileInput,
  UserProfile,
} from "@/utils/types/profileTypes";
import {
  createProfileWriteSchema,
  updateProfileWriteSchema,
  userProfileSchema,
} from "@/utils/schemas/profileSchema";
import { reportError } from "@/monitoring/reportError";
import { handleValidationError } from "@/errors/validationErrorHandler";

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
      handleValidationError(e);
    }

    throw handleFirebaseError(e);
  }
}

export async function createProfile(data: CreateProfileInput) {
  const validatedPayload = {
    uid: data.uid,
    email: data.email,
    displayName: data.displayName ?? null,
    role: "customer" as const,
  };

  try {
    await createProfileWriteSchema.validate(validatedPayload, {
      abortEarly: false,
    });

    const payload = {
      ...validatedPayload,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

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

    if (error instanceof YupValidationError) {
      handleValidationError(error);
    }

    handleFirebaseError(error);
  }
}

export async function updateProfile(data: UpdateProfileInput) {
  const validatedPayload = {
    displayName: data.displayName ?? null,
    defaultShippingAddress: data.defaultShippingAddress,
  };

  try {
    await updateProfileWriteSchema.validate(validatedPayload, {
      abortEarly: false,
    });

    const payload = {
      ...validatedPayload,
      updatedAt: serverTimestamp(),
    };

    await upsertProfile(data.uid, payload);
  } catch (error) {
    reportError(error, {
      feature: "profile",
      action: "update_profile",
      extra: {
        uid: data.uid,
      },
    });

    if (error instanceof YupValidationError) {
      handleValidationError(error);
    }

    handleFirebaseError(error);
  }
}

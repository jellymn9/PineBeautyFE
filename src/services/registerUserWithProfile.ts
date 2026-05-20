import { register } from "@/APIs/auth";
import { createProfile } from "@/APIs/profile";
import { reportError } from "@/monitoring/reportError";

type RegisterUserWithProfileInput = {
  email: string;
  password: string;
  name: string;
};

export async function registerUserWithProfile(
  data: RegisterUserWithProfileInput,
) {
  const user = await register(data.email, data.password);

  try {
    await createProfile({
      uid: user.uid,
      email: user.email ?? "",
      displayName: data.name,
    });

    return user;
  } catch (error) {
    reportError(error, {
      feature: "auth",
      action: "register_user_with_profile",
      extra: {
        uid: user.uid,
        email: user.email ?? data.email,
        stage: "profile_creation",
      },
    });

    throw error;
  }
}

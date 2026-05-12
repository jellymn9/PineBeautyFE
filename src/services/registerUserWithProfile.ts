import { register } from "@/APIs/auth";
import { createProfile } from "@/APIs/profile";

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
  } catch (e) {
    console.error("Profile creation failed after successful registration", {
      uid: user.uid,
      email: user.email ?? data.email,
      error: e,
    });

    throw e;
  }
}

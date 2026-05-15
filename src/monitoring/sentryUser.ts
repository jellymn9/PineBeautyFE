import * as Sentry from "@sentry/react";
import type { User } from "firebase/auth";

export function setSentryUser(user: User | null) {
  if (!user) {
    Sentry.setUser(null);
    return;
  }

  Sentry.setUser({
    id: user.uid,
    email: user.email ?? undefined,
  });
}

import * as Sentry from "@sentry/react";

type ReportErrorOptions = {
  feature?: string;
  action?: string;
  extra?: Record<string, unknown>;
};

export function reportError(error: unknown, options?: ReportErrorOptions) {
  if (import.meta.env.DEV) {
    console.error(error);
  }

  Sentry.captureException(error, {
    tags: {
      feature: options?.feature,
      action: options?.action,
    },
    extra: options?.extra,
  });
}

export const profileKeys = {
  all: ["profile"] as const,
  detail: (uid: string) => [...profileKeys.all, uid] as const,
};

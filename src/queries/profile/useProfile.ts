import { useQuery } from "@tanstack/react-query";
import { profileKeys } from "./profileKeys";
import { getProfile } from "@/APIs/profile";

export function useProfile(uid: string) {
  return useQuery({
    queryKey: profileKeys.detail(uid),
    queryFn: () => getProfile(uid),
    staleTime: 1000 * 60 * 5,
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateProfile } from "@/APIs/profile";
import { profileKeys } from "./profileKeys";

import type { UpdateProfileInput } from "@/utils/types/profileTypes";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProfileInput) => updateProfile(data),

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: profileKeys.detail(variables.uid),
      });
    },
  });
}

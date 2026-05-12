import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

type CreateProfileInput = {
  uid: string;
  email: string;
  displayName?: string;
};

export async function createProfile(data: CreateProfileInput) {
  const profileRef = doc(db, "profiles", data.uid);

  await setDoc(
    profileRef,
    {
      uid: data.uid,
      email: data.email,
      displayName: data.displayName ?? null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

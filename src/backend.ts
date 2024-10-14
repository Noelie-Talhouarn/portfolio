import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types'
export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase
import { ref } from 'vue'
import type { UsersResponse } from './pocketbase-types'


import.meta.env.VITE_URL_POCKETBASE


// utilisateur connecté

export const user = ref<UsersResponse | null>(null);
pb.authStore.onChange((token, model) => {
    user.value = model as UsersResponse;
    }, true /* lancé de suite */);


//deconnecte l'utilisateur

export function logout() {
  pb.authStore.clear();
}

//connecte l'utilisateur avec github

export async function loginWithGitHub() {
  const authData = await pb
    .collection("users")
    .authWithOAuth2({ provider: "github" });
  console.log("loginWithGitHub authData", authData);
}

//connecte l'utilisateur avec google

export async function loginWithGoogle() {
  const authData = await pb
    .collection("users")
    .authWithOAuth2({ provider: "google" });
  console.log("loginWithGoogle authData", authData);
}


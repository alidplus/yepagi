import { superjson } from "@repo/utils";
import { Store } from "@tanstack/react-store";

export const accessTokenStore = new Store<string | undefined>(undefined);

export function setToken (t?: string) { accessTokenStore.setState(() => t) }
export function getToken () { return accessTokenStore.state }

export async function refreshToken () {
  return fetch(
    '/trpc/auth.refreshToken',
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    }
  )
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((res) => {
    const { accessToken } = superjson.deserialize(res.result.data) as { accessToken?: string }
    accessTokenStore.setState(() => accessToken)
    // console.log('accessToken', accessToken, options.headers);
    return accessToken
  })
}
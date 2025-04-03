import { accessTokenStore } from "@/stores";
import superjson from "superjson";

let isRefreshing = false
const failedQueue: Array<{ resolve(at: string): void; reject(err: unknown): void }> = []

function processQueue(error?: unknown, accessToken?: string) {
  let job = failedQueue.pop()
  while (job) {
    if (error) job.reject(error)
    else if (accessToken) job.resolve(accessToken)
    job = failedQueue.pop()
  }
}

export function handleTrpcUnauthError(error: Response, url: URL | RequestInfo, options: any) {
  if (isRefreshing) {
    // return error
    return new Promise<string>((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    })
      .then((accessToken) => {
        options.headers.Authorization = `Bearer ${accessToken}`;
        return fetch(url, options);
      })
      .catch((_axiosError) => {
        return error;
      });
  }
  isRefreshing = true

  //TODO: make a common function for this with the axios handler

  return fetch(
      '/trpc/auth.refreshToken',
      {
        method: 'POST',
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
      const { accessToken = '' } = superjson.deserialize(res.result.data) as any
      console.log('accessToken', accessToken, options.headers);
      if (!accessToken) return error
      accessTokenStore.setState(() => accessToken)
      
      processQueue(undefined, accessToken);
      
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(url, options);
    })
    .catch((err) => {
      // NOTE: now this error is an axios error, not a fetch one, so don't use it
      processQueue(err, undefined);
      // also refresh token expired
      // if (axiosError.response?.status === 401) {
      //   appStore.dispatch(logOut());
      //   appStore.dispatch(signInFailed(error));
      // }
      return error;
    })
    .finally(() => {
      isRefreshing = false;
    });
}

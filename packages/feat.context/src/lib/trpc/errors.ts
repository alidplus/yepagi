import { refreshToken } from "./stores";

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
  const postponed = new Promise<string>((resolve, reject) => {
    failedQueue.push({ resolve, reject });
  })

  postponed.then((accessToken) => {
    options.headers.Authorization = `Bearer ${accessToken}`;
    return fetch(url, options);
  })
  
  postponed.catch((_axiosError) => {
    return error;
  });

  if (!isRefreshing) {
    isRefreshing = true

    refreshToken()
    .then((accessToken) => {
      // console.log('accessToken', accessToken, options.headers);
      if (!accessToken) return error
      
      processQueue(undefined, accessToken);
    })
    .catch((err) => {
      // NOTE: now this error is an axios error, not a fetch one, so don't use it
      processQueue(err, undefined);
    })
    .finally(() => {
      isRefreshing = false;
    });
  }

  return postponed as unknown as Promise<Response>
}

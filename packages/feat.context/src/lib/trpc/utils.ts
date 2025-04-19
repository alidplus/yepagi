
export function getUrl(mock?: true) {
  return mock ? `http://localhost:3030/trpc` : `http://localhost:3000/trpc`;
}
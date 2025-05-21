import { isRouteErrorResponse, useRouteError } from 'react-router'

export function ErrorBoundary() {
  const error = useRouteError()
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>Some Error here</h1>
  )
}

// // If you want to customize the component display name in React dev tools:
ErrorBoundary.displayName = 'SampleErrorBoundary'

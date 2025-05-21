import { createBrowserRouter, RouteObject } from 'react-router'
import AppLayout from './layout/AppLayout'
import { ErrorBoundary } from './pages/utils/ErrorBoundary'
import { HydrateFallback } from './pages/utils/HydrateFallback'
import { lazy } from 'react'

const TilesAndStats = lazy(() => import('./pages/TilesAndStats'))
const ChecklistTemplates = lazy(() => import('./pages/ChecklistTemplates'))
const ViewItemTree = lazy(
  () => import('./pages/ChecklistTemplates/ViewItemTree')
)
const ViewItemDetails = lazy(
  () => import('./pages/ChecklistTemplates/ViewItemTree/ViewItemDetails')
)

const routeCommon = {
  ErrorBoundary,
  hasErrorBoundary: true,
  HydrateFallback,
}

const routers: RouteObject[] = [
  {
    Component: AppLayout,
    ...routeCommon,
    children: [
      {
        path: '',
        Component: TilesAndStats,
        ...routeCommon,
      },
      {
        path: '/checklist',
        Component: ChecklistTemplates,
        ...routeCommon,
        children: [
          {
            path: ':id',
            Component: ViewItemTree,
            ...routeCommon,
            children: [
              {
                path: ':id',
                Component: ViewItemDetails,
                ...routeCommon,
              },
            ],
          },
        ],
      },
    ],
  },
]

const router = createBrowserRouter(routers)

export default router

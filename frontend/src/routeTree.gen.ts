/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UnauthenticatedImport } from './routes/_unauthenticated'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as UnauthenticatedLoginImport } from './routes/_unauthenticated/login'
import { Route as AuthenticatedNewImport } from './routes/_authenticated/new'
import { Route as AuthenticatedBoardBoardImport } from './routes/_authenticated/board.$board'

// Create/Update Routes

const UnauthenticatedRoute = UnauthenticatedImport.update({
  id: '/_unauthenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const UnauthenticatedLoginRoute = UnauthenticatedLoginImport.update({
  path: '/login',
  getParentRoute: () => UnauthenticatedRoute,
} as any)

const AuthenticatedNewRoute = AuthenticatedNewImport.update({
  path: '/new',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedBoardBoardRoute = AuthenticatedBoardBoardImport.update({
  path: '/board/$board',
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_unauthenticated': {
      id: '/_unauthenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof UnauthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/new': {
      id: '/_authenticated/new'
      path: '/new'
      fullPath: '/new'
      preLoaderRoute: typeof AuthenticatedNewImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_unauthenticated/login': {
      id: '/_unauthenticated/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof UnauthenticatedLoginImport
      parentRoute: typeof UnauthenticatedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/board/$board': {
      id: '/_authenticated/board/$board'
      path: '/board/$board'
      fullPath: '/board/$board'
      preLoaderRoute: typeof AuthenticatedBoardBoardImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedNewRoute,
    AuthenticatedIndexRoute,
    AuthenticatedBoardBoardRoute,
  }),
  UnauthenticatedRoute: UnauthenticatedRoute.addChildren({
    UnauthenticatedLoginRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_unauthenticated"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/new",
        "/_authenticated/",
        "/_authenticated/board/$board"
      ]
    },
    "/_unauthenticated": {
      "filePath": "_unauthenticated.tsx",
      "children": [
        "/_unauthenticated/login"
      ]
    },
    "/_authenticated/new": {
      "filePath": "_authenticated/new.tsx",
      "parent": "/_authenticated"
    },
    "/_unauthenticated/login": {
      "filePath": "_unauthenticated/login.tsx",
      "parent": "/_unauthenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/board/$board": {
      "filePath": "_authenticated/board.$board.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */

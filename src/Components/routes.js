import Loadable from 'react-loadable'

import LoadingPage from './pages/LoadingPage'

export const AsyncLogin = Loadable({
  loader: () => import('Containers/Signin' /* webpackChunkName: "LoginPage" */),
  loading: LoadingPage,
})

export const AsyncSignup = Loadable({
  loader: () => import('Containers/Signup'),
  loading: LoadingPage,
})

// Not Found Page
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound' /* webpackChunkName: "NotFound" */),
  loading: LoadingPage,
})

// Prodcut example page
export const AsyncProduct = Loadable({
  loader: () => import('Containers/Product'),
  loading: LoadingPage,
})

// Create Edit product page
export const AsyncCreateEditProduct = Loadable({
  loader: () => import('Containers/CreateEditProduct'),
  loading: LoadingPage,
})

export const AsyncHomePage = Loadable({
  loader: () => import('Components/pages/Home'),
  loading: LoadingPage,
})

// Profile page
export const AsyncProfile = Loadable({
  loader: () => import('Containers/Profile'),
  loading: LoadingPage,
})

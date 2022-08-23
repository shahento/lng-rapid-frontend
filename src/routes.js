import React from 'react'
import Database from './views/pages/database'
const Wiki =  React.lazy(() => import('./views/pages/wiki'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/wiki', name: 'Wiki', element: Wiki },
  { path: '/database', name: 'Database', element: Database, exact: true },
]

export default routes

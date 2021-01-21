import { ROUTES } from '.'

const appRoute = [
  {
    name: 'Home',
    exact: true,
    path: ROUTES.HOME
  },
  {
    name: 'Module',
    exact: true,
    path: ROUTES.MODULE(':id')
  },
]

export default appRoute
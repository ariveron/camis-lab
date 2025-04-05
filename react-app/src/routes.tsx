import { RouteObject } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '*', // catch-all for 404
    element: <NotFound />
  }
];

export default routes;